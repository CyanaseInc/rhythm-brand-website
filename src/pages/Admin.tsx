import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import {
  getProducts,
  getOrders,
  getCustomers,
  deleteProduct as deleteProductApi,
} from "../api/api";
import { ProductModal } from "@/components/ProductModal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminProducts from "../components/admin/AdminProducts";
import AdminOrders from "../components/admin/AdminOrders";
import AdminCustomers from "../components/admin/AdminCustomers";
import AdminSettings from "../components/admin/AdminSettings";

const productSchema = z.object({
  name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  price: z.string().refine((value) => !isNaN(parseFloat(value)), {
    message: "Price must be a number.",
  }),
  stock: z.string().refine((value) => !isNaN(parseInt(value)), {
    message: "Stock must be a number.",
  }),
  image: z.string().url({ message: "Image must be a valid URL." }),
});

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [activeTab, setActiveTab] = useState("dashboard");
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const {
    data: orders,
    isLoading: ordersLoading,
    error: ordersError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const {
    data: customers,
    isLoading: customersLoading,
    error: customersError,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  const addProductForm = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      stock: "",
      image: "",
    },
  });

  const editProductForm = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      stock: "",
      image: "",
    },
  });

  useEffect(() => {
    if (productToEdit) {
      editProductForm.reset({
        name: productToEdit.name,
        description: productToEdit.description,
        price: productToEdit.price.toString(),
        stock: productToEdit.stock.toString(),
        image: productToEdit.image,
      });
    }
  }, [productToEdit, editProductForm]);

  const { mutate: deleteProduct, isLoading: isDeleteLoading } = useMutation({
    mutationFn: deleteProductApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        title: "Success",
        description: "Product deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete product: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const openAddProductModal = () => {
    setIsAddProductModalOpen(true);
  };

  const closeAddProductModal = () => {
    setIsAddProductModalOpen(false);
    addProductForm.reset();
  };

  const openEditProductModal = (product) => {
    setProductToEdit(product);
    setIsEditProductModalOpen(true);
  };

  const closeEditProductModal = () => {
    setIsEditProductModalOpen(false);
    setProductToEdit(null);
    editProductForm.reset();
  };

  const handleAddProductSubmit = async (values) => {
    console.log("Adding product", values);
    closeAddProductModal();
  };

  const handleEditProductSubmit = async (values) => {
    console.log("Editing product", values);
    closeEditProductModal();
  };

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-950">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />
      <main className="flex-1 p-2 sm:p-4 md:p-8 mt-24 md:mt-0">
        <div className="max-w-7xl mx-auto">
          {activeTab === "dashboard" && (
            <AdminDashboard orders={orders || []} products={products || []} />
          )}
          {activeTab === "products" && (
            <AdminProducts
              products={products || []}
              openAddProductModal={openAddProductModal}
              openEditProductModal={openEditProductModal}
              handleDeleteProduct={handleDeleteProduct}
            />
          )}
          {activeTab === "orders" && (
            <AdminOrders orders={orders || []} ordersLoading={ordersLoading} ordersError={ordersError} />
          )}
          {activeTab === "customers" && (
            <AdminCustomers
              customers={customers || []}
              customersLoading={customersLoading}
              customersError={customersError}
            />
          )}
          {activeTab === "settings" && (
            <AdminSettings />
          )}
        </div>
      </main>
      <Dialog open={isAddProductModalOpen} onOpenChange={setIsAddProductModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-gray-700">
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
            <DialogDescription>
              Add a new product to the store.
            </DialogDescription>
          </DialogHeader>
          <Form {...addProductForm}>
            <form onSubmit={addProductForm.handleSubmit(handleAddProductSubmit)} className="space-y-4">
              <FormField
                control={addProductForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Product name" {...field} className="bg-gray-800 text-white border-gray-600" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addProductForm.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Product description"
                        {...field}
                        className="bg-gray-800 text-white border-gray-600 resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addProductForm.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="Product price" {...field} className="bg-gray-800 text-white border-gray-600" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addProductForm.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input placeholder="Product stock" {...field} className="bg-gray-800 text-white border-gray-600" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addProductForm.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Product image URL" {...field} className="bg-gray-800 text-white border-gray-600" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="secondary" onClick={closeAddProductModal}>
                  Cancel
                </Button>
                <Button type="submit">Add Product</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <Dialog open={isEditProductModalOpen} onOpenChange={setIsEditProductModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-gray-700">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>
              Edit the details of the selected product.
            </DialogDescription>
          </DialogHeader>
          <Form {...editProductForm}>
            <form onSubmit={editProductForm.handleSubmit(handleEditProductSubmit)} className="space-y-4">
              <FormField
                control={editProductForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Product name" {...field} className="bg-gray-800 text-white border-gray-600" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editProductForm.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Product description"
                        {...field}
                        className="bg-gray-800 text-white border-gray-600 resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editProductForm.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="Product price" {...field} className="bg-gray-800 text-white border-gray-600" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editProductForm.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input placeholder="Product stock" {...field} className="bg-gray-800 text-white border-gray-600" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editProductForm.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Product image URL" {...field} className="bg-gray-800 text-white border-gray-600" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="secondary" onClick={closeEditProductModal}>
                  Cancel
                </Button>
                <Button type="submit">Update Product</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
