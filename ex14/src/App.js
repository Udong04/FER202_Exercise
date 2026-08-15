import React, { createContext, useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Navbar,
  Badge,
  Form,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";


// =====================================================
// 1. THEME CONTEXT
// =====================================================

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    card: "#ffffff",
  },

  dark: {
    foreground: "#ffffff",
    background: "#292d35",
    card: "#343942",
  },
};


// Create ThemeContext
const ThemeContext = createContext();


// ThemeProvider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[theme],
        themeName: theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}


// Hook sử dụng ThemeContext
function useTheme() {
  return useContext(ThemeContext);
}


// =====================================================
// 2. CART CONTEXT
// =====================================================

const CartContext = createContext();


// Dữ liệu món ăn
const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: "https://picsum.photos/300/200?random=1",
    category: "mains",
    label: "Hot",
    price: 4.99,
    featured: true,
    description:
      "A unique combination of Indian Uthappam and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
  },

  {
    id: 1,
    name: "Zucchipakoda",
    image: "https://picsum.photos/300/200?random=2",
    category: "appetizer",
    label: "",
    price: 1.99,
    featured: false,
    description:
      "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce.",
  },

  {
    id: 2,
    name: "Vadonut",
    image: "https://picsum.photos/300/200?random=3",
    category: "appetizer",
    label: "New",
    price: 1.99,
    featured: false,
    description:
      "A quintessential ConFusion experience, is it a vada or is it a donut?",
  },

  {
    id: 3,
    name: "Elaicheese Cake",
    image: "https://picsum.photos/300/200?random=4",
    category: "dessert",
    label: "",
    price: 2.99,
    featured: false,
    description:
      "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms.",
  },
];


// CartProvider
function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item
  const addToCart = (dish) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === dish.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === dish.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevItems,
        {
          ...dish,
          quantity: 1,
        },
      ];
    });
  };


  // Remove item
  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };


  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };


  // Tổng số lượng món
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );


  // Tổng tiền
  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


// Hook sử dụng CartContext
function useCart() {
  return useContext(CartContext);
}


// =====================================================
// THEME COMPONENT
// =====================================================

function Theme() {
  const {
    theme,
    themeName,
    toggleTheme,
  } = useTheme();

  return (
    <div
      className="theme-container"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
      }}
    >
      <div className="theme-content">
        <h4>
          Theme Context
        </h4>

        <p>
          Current theme:{" "}
          <strong>
            {themeName.toUpperCase()}
          </strong>
        </p>

        <Button
          variant={
            themeName === "light"
              ? "dark"
              : "light"
          }
          onClick={toggleTheme}
        >
          Toggle Theme
        </Button>
      </div>
    </div>
  );
}


// =====================================================
// DISHES LIST
// =====================================================

function DishesList() {
  const {
    addToCart,
  } = useCart();

  const {
    theme,
  } = useTheme();

  return (
    <div>
      <h3
        className="mb-4"
        style={{
          color: theme.foreground,
        }}
      >
        Dishes
      </h3>

      <Row>
        {dishes.map((dish) => (
          <Col
            md={6}
            lg={4}
            className="mb-4"
            key={dish.id}
          >
            <Card
              className="dish-card h-100"
              style={{
                backgroundColor: theme.card,
                color: theme.foreground,
              }}
            >

              <Card.Img
                variant="top"
                src={dish.image}
                height="180"
                style={{
                  objectFit: "cover",
                }}
              />

              <Card.Body>
                <div className="d-flex justify-content-between">
                  <Card.Title>
                    {dish.name}
                  </Card.Title>

                  {dish.label && (
                    <Badge bg="danger">
                      {dish.label}
                    </Badge>
                  )}
                </div>

                <p className="text-muted">
                  {dish.category}
                </p>

                <Card.Text>
                  {dish.description}
                </Card.Text>

                <div className="d-flex justify-content-between align-items-center">
                  <strong className="price">
                    ${dish.price.toFixed(2)}
                  </strong>

                  <Button
                    variant="primary"
                    onClick={() =>
                      addToCart(dish)
                    }
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}


// =====================================================
// CART
// =====================================================

function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    cartCount,
    cartTotal,
  } = useCart();

  const {
    theme,
  } = useTheme();

  return (
    <Card
      className="cart-card"
      style={{
        backgroundColor: theme.card,
        color: theme.foreground,
      }}
    >
      <Card.Body>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>
            Cart
          </h3>

          <Badge bg="primary">
            {cartCount} items
          </Badge>
        </div>


        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h5>
              Your cart is empty
            </h5>

            <p>
              Add some dishes to your cart.
            </p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item"
              >
                <div>
                  <strong>
                    {item.name}
                  </strong>

                  <div className="text-muted">
                    ${item.price.toFixed(2)}
                    {" × "}
                    {item.quantity}
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">

                  <strong>
                    $
                    {(
                      item.price *
                      item.quantity
                    ).toFixed(2)}
                  </strong>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </Button>

                </div>
              </div>
            ))}


            <hr />


            <div className="cart-summary">

              <div className="summary-row">
                <span>
                  Total Items:
                </span>

                <strong>
                  {cartCount}
                </strong>
              </div>


              <div className="summary-row">
                <span>
                  Total Value:
                </span>

                <strong className="total-price">
                  ${cartTotal.toFixed(2)}
                </strong>
              </div>

            </div>


            <Button
              variant="danger"
              className="w-100 mt-3"
              onClick={clearCart}
            >
              Clear Cart
            </Button>

          </>
        )}

      </Card.Body>
    </Card>
  );
}


// =====================================================
// NAVBAR
// =====================================================

function Navigation() {
  const {
    cartCount,
  } = useCart();

  const {
    theme,
  } = useTheme();

  return (
    <Navbar
      style={{
        backgroundColor: theme.card,
      }}
      className="mb-4 shadow-sm"
    >
      <Container>

        <Navbar.Brand
          style={{
            color: theme.foreground,
            fontWeight: "bold",
          }}
        >
          🍽️ Food App
        </Navbar.Brand>

        <div
          style={{
            color: theme.foreground,
          }}
        >
          Cart{" "}
          <Badge bg="danger">
            {cartCount}
          </Badge>
        </div>

      </Container>
    </Navbar>
  );
}


// =====================================================
// APP
// =====================================================

function App() {
  return (
    <ThemeProvider>

      <CartProvider>

        <AppContent />

      </CartProvider>

    </ThemeProvider>
  );
}


// =====================================================
// APP CONTENT
// =====================================================

function AppContent() {
  const {
    theme,
  } = useTheme();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: theme.background,
        transition: "0.3s",
      }}
    >

      <Navigation />

      <Container className="pb-5">

        {/* Exercise 1 */}
        <section className="exercise-section">

          <h2
            style={{
              color: theme.foreground,
            }}
          >
            1. Theme using useContext
          </h2>

          <p
            style={{
              color: theme.foreground,
            }}
          >
            Change the application theme using
            ThemeContext.
          </p>

          <Theme />

        </section>


        {/* Exercise 2 */}
        <section className="exercise-section">

          <h2
            style={{
              color: theme.foreground,
            }}
          >
            2. Shopping Cart using useContext
          </h2>

          <p
            style={{
              color: theme.foreground,
            }}
          >
            Add dishes to the cart and manage
            cart items using CartContext.
          </p>


          <Row>

            <Col lg={8}>
              <DishesList />
            </Col>

            <Col lg={4}>
              <Cart />
            </Col>

          </Row>

        </section>


        {/* Exercise 3 */}
        <section className="exercise-section">

          <Card
            style={{
              backgroundColor: theme.card,
              color: theme.foreground,
              border: "none",
            }}
          >
            <Card.Body>

              <h3>
                3. Real-time Cart Update
              </h3>

              <p>
                When you add or remove an item,
                the cart count and total value
                are updated immediately without
                refreshing the page.
              </p>

              <Row>

                <Col md={6}>
                  <div className="realtime-box">
                    <span>
                      Cart Count
                    </span>

                    <strong>
                      {useCart().cartCount}
                    </strong>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="realtime-box">
                    <span>
                      Cart Value
                    </span>

                    <strong>
                      $
                      {useCart()
                        .cartTotal
                        .toFixed(2)}
                    </strong>
                  </div>
                </Col>

              </Row>

            </Card.Body>
          </Card>

        </section>

      </Container>

    </div>
  );
}


export default App;