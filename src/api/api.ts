
export const getProducts = async () => {
  return [
    {
      id: 1,
      name: "Sample Product",
      description: "This is a sample product",
      price: 19.99,
      stock: 5,
      image: "",
    },
  ];
};

export const getOrders = async () => {
  return [
    {
      id: 1,
      order_number: "ORD-001",
      user: "John Doe",
      status: "Completed",
      total: 99.99,
      paid: true,
      created_at: "2024-06-15T12:00:00Z",
      items: [
        { product_name: "Sample Product", quantity: 2, price: 19.99 },
      ],
    },
  ];
};

export const getCustomers = async () => {
  return [
    {
      id: 1,
      username: "johndoe",
      email: "john@example.com",
      is_staff: false,
      is_active: true,
      date_joined: "2023-01-15T12:00:00Z",
    },
  ];
};

export const deleteProduct = async (id: number) => {
  // dummy delete
  return true;
};
