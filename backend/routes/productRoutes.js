import express from 'express'
const router = express.Router()

// بيانات ثابتة مؤقتة بدل قاعدة البيانات
const products = [
  {
    _id: '1',
    name: 'iPhone 14 Pro',
    image: '/images/sample.jpg',
    description: 'iPhone 14 Pro sample data for UI testing',
    brand: 'Apple',
    category: 'Electronics',
    price: 999.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Samsung Galaxy S23',
    image: '/images/sample.jpg',
    description: 'Galaxy S23 sample data for UI testing',
    brand: 'Samsung',
    category: 'Electronics',
    price: 899.99,
    countInStock: 8,
    rating: 4.3,
    numReviews: 9,
  },
]

// ✅ راوت خاص لأفضل المنتجات (تجريبي)
router.get('/top', (req, res) => {
  const topProducts = products.slice(0, 3) // أول 3 منتجات مثلًا
  res.json(topProducts)
})

// ✅ كل المنتجات
router.get('/', (req, res) => {
  res.json(products)
})

// ✅ منتج معين حسب الـ ID
router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

export default router
