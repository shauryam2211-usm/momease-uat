// API Configuration
const API_BASE_URL = 'http://localhost:3000/api'

// Generic API request handler
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('API Request Error:', error)
    throw error
  }
}

// Waitlist API calls
export const waitlistService = {
  // Join waitlist
  joinWaitlist: async (email, name = '') => {
    return apiRequest('/waitlist', {
      method: 'POST',
      body: JSON.stringify({ email, name }),
    })
  },

  // Get waitlist status
  getWaitlistStatus: async () => {
    return apiRequest('/waitlist/status', {
      method: 'GET',
    })
  },
}

// User API calls
export const userService = {
  // Get user profile
  getUserProfile: async (userId) => {
    return apiRequest(`/users/${userId}`, {
      method: 'GET',
    })
  },

  // Update user profile
  updateUserProfile: async (userId, data) => {
    return apiRequest(`/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  },
}

// Product API calls
export const productService = {
  // Get all products
  getProducts: async () => {
    return apiRequest('/products', {
      method: 'GET',
    })
  },

  // Get product by ID
  getProductById: async (productId) => {
    return apiRequest(`/products/${productId}`, {
      method: 'GET',
    })
  },
}

// Default export
export default {
  waitlistService,
  userService,
  productService,
}
