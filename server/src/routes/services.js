const express = require('express');
const router = express.Router();
const {
    getServiceRequests,
    getServiceRequest,
    createServiceRequest,
    updateServiceRequest,
    cancelServiceRequest,
    getUserServiceRequests
} = require('../controllers/services');
const { protect, authorize } = require('../middleware/auth');

router.route('/')
    .get(authorize('admin'), getServiceRequests)
    .post(protect, createServiceRequest);

router.route('/user').get(protect, getUserServiceRequests);

router.route('/:id')
    .get(protect, getServiceRequest)
    .put(protect, authorize('admin'), updateServiceRequest);

router.put('/:id/cancel', protect, cancelServiceRequest);

module.exports = router;