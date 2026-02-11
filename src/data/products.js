export const products = [
    {
        id: 1,
        name: "MacBook Pro M3",
        price: 2200,
        category: "Laptop",
        description: "A powerful laptop designed for developers and creators with Apple's M3 chip."
    },
    {
        id: 2,
        name: "iPhone 15 Pro",
        price: 1200,
        category: "Mobile",
        description: "Apple's latest smartphone with incredible camera and performance."
    },
    {
        id: 3,
        name: "Sony WH-1000XM5",
        price: 400,
        category: "Headphones",
        description: "Industry leading noise cancelling headphones with premium sound quality."
    },
    {
        id: 4,
        name: "Samsung 4K Monitor",
        price: 650,
        category: "Monitor",
        description: "Ultra HD monitor perfect for design, coding, and multimedia tasks."
    },
    {
        id: 5,
        name: "Logitech MX Master 3S",
        price: 120,
        category: "Mouse",
        description: "Ergonomic mouse built for productivity and long coding sessions."
    },
    {
        id: 6,
        name: "Mechanical Keyboard RGB",
        price: 180,
        category: "Keyboard",
        description: "Mechanical keyboard with RGB lighting and tactile feedback."
    }
]

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
