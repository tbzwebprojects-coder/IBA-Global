-- Users table (customers and admin)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  role VARCHAR(20) DEFAULT 'customer', -- 'customer', 'admin', 'cleaner'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  base_price DECIMAL(10, 2) NOT NULL,
  category VARCHAR(50), -- 'end_of_tenancy', 'deep_clean', 'carpet', 'oven', 'window'
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Pricing rules table
CREATE TABLE IF NOT EXISTS pricing_rules (
  id SERIAL PRIMARY KEY,
  property_type VARCHAR(50) NOT NULL, -- 'studio', 'apartment', 'house'
  base_price DECIMAL(10, 2) NOT NULL,
  bedroom_price DECIMAL(10, 2) NOT NULL,
  bathroom_price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  property_type VARCHAR(50) NOT NULL,
  bedrooms INTEGER NOT NULL,
  bathrooms INTEGER NOT NULL,
  address TEXT NOT NULL,
  postcode VARCHAR(20) NOT NULL,
  city VARCHAR(100) NOT NULL,
  scheduled_date DATE NOT NULL,
  scheduled_time TIME NOT NULL,
  base_price DECIMAL(10, 2) NOT NULL,
  extra_services JSONB, -- {oven: 35, carpet: 40, ...}
  total_price DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'confirmed', 'in_progress', 'completed', 'cancelled'
  payment_status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'paid', 'refunded'
  payment_intent_id VARCHAR(255),
  special_instructions TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments table
CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  booking_id INTEGER REFERENCES bookings(id),
  user_id INTEGER REFERENCES users(id),
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'GBP',
  stripe_payment_id VARCHAR(255),
  stripe_charge_id VARCHAR(255),
  payment_method VARCHAR(50), -- 'card', 'bank_transfer'
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'succeeded', 'failed', 'refunded'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  booking_id INTEGER REFERENCES bookings(id),
  user_id INTEGER REFERENCES users(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- WhatsApp messages log
CREATE TABLE IF NOT EXISTS whatsapp_messages (
  id SERIAL PRIMARY KEY,
  booking_id INTEGER REFERENCES bookings(id),
  user_id INTEGER REFERENCES users(id),
  phone_number VARCHAR(20),
  message TEXT NOT NULL,
  message_sid VARCHAR(255),
  status VARCHAR(50), -- 'sent', 'delivered', 'failed'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Analytics/Customer journey tracking
CREATE TABLE IF NOT EXISTS customer_journey (
  id SERIAL PRIMARY KEY,
  session_id VARCHAR(255),
  user_id INTEGER REFERENCES users(id),
  event_type VARCHAR(100), -- 'page_view', 'quote_calculated', 'booking_started', 'booking_completed'
  event_data JSONB,
  page_url TEXT,
  referrer TEXT,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default pricing rules
INSERT INTO pricing_rules (property_type, base_price, bedroom_price, bathroom_price) VALUES
  ('studio', 120.00, 25.00, 20.00),
  ('apartment', 150.00, 25.00, 20.00),
  ('house', 180.00, 25.00, 20.00)
ON CONFLICT DO NOTHING;

-- Insert default services
INSERT INTO services (name, description, base_price, category, is_active) VALUES
  ('End of Tenancy Cleaning', 'Complete deep clean for rental properties', 150.00, 'end_of_tenancy', true),
  ('Deep Cleaning', 'Thorough cleaning of entire property', 120.00, 'deep_clean', true),
  ('Carpet Cleaning', 'Professional steam cleaning per room', 40.00, 'carpet', true),
  ('Oven Deep Clean', 'Specialized oven cleaning service', 35.00, 'oven', true),
  ('Window Cleaning', 'Interior window cleaning', 30.00, 'window', true)
ON CONFLICT DO NOTHING;
