-- IBA Cleaning Service - Cloudflare D1 Database Schema

-- Customers table
CREATE TABLE IF NOT EXISTS customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  password_hash TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  base_price REAL NOT NULL,
  price_per_bedroom REAL DEFAULT 0,
  price_per_bathroom REAL DEFAULT 0,
  active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id INTEGER NOT NULL,
  service_id INTEGER NOT NULL,
  booking_date DATETIME NOT NULL,
  property_type TEXT,
  bedrooms INTEGER DEFAULT 0,
  bathrooms INTEGER DEFAULT 0,
  address TEXT,
  postcode TEXT,
  status TEXT DEFAULT 'pending',
  total_amount REAL NOT NULL,
  payment_status TEXT DEFAULT 'unpaid',
  payment_intent_id TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (service_id) REFERENCES services(id)
);

-- Admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Payment transactions table
CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  booking_id INTEGER NOT NULL,
  amount REAL NOT NULL,
  currency TEXT DEFAULT 'gbp',
  stripe_payment_intent_id TEXT,
  status TEXT DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (booking_id) REFERENCES bookings(id)
);

-- Insert default services
INSERT INTO services (name, description, base_price, price_per_bedroom, price_per_bathroom, active) VALUES
  ('End of Tenancy Cleaning', 'Comprehensive deep clean for move-out', 120.00, 25.00, 15.00, 1),
  ('Deep Cleaning', 'Thorough cleaning of entire property', 100.00, 20.00, 12.00, 1),
  ('Regular Cleaning', 'Standard cleaning service', 60.00, 15.00, 10.00, 1),
  ('Carpet Cleaning', 'Professional carpet cleaning', 80.00, 0, 0, 1);

-- Insert default admin user (password: admin123 - CHANGE IN PRODUCTION)
INSERT INTO admin_users (username, email, password_hash, role) VALUES
  ('admin', 'admin@ibacleaning.co.uk', '$2b$10$rKvVJl7fQQMZgEjdYv8HyOXr3hF.WH8Y5XW2TxXqJGXJLzYQZhVFO', 'admin');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_customer ON bookings(customer_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(booking_date);
CREATE INDEX IF NOT EXISTS idx_customers_email ON customers(email);
CREATE INDEX IF NOT EXISTS idx_payments_booking ON payments(booking_id);
