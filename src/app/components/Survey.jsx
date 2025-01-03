"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import LoadingSpinner from './LoadingSpinner'

export default function Survey() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {}
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }
        if (!formData.feedback.trim()) {
            newErrors.feedback = 'Feedback is required'
        }
        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // Validate form
        const formErrors = validateForm()
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
            return
        }

        setIsSubmitting(true)

        try {
            // Here you would typically send the data to your backend
            // For now, we'll simulate an API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            // Clear form
            setFormData({
                name: '',
                email: '',
                feedback: ''
            })
            
            // Show success state
            setSubmitted(true)
        } catch (error) {
            setErrors({
                submit: 'Failed to submit form. Please try again.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
        >
            {submitted ? (
                <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-center py-8 bg-emerald-900/50 rounded-lg"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl mb-4 text-emerald-400"
                    >
                        ✓
                    </motion.div>
                    <h3 className="text-2xl font-bold text-emerald-100 mb-4">Thank You!</h3>
                    <p className="text-emerald-200">Your feedback helps us improve.</p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 text-emerald-400 hover:text-emerald-300"
                    >
                        Submit another response
                    </button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-6 bg-emerald-900/50 p-6 rounded-lg shadow-md">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-emerald-200 text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`bg-emerald-800/50 border ${
                                    errors.name ? 'border-red-500' : 'border-emerald-700'
                                } text-emerald-100 placeholder-emerald-400 rounded-lg px-4 py-2 focus:ring focus:ring-emerald-500 focus:outline-none transition`}
                                placeholder="Your name"
                            />
                            {errors.name && (
                                <span className="text-red-400 text-sm mt-1">{errors.name}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-emerald-200 text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`bg-emerald-800/50 border ${
                                    errors.email ? 'border-red-500' : 'border-emerald-700'
                                } text-emerald-100 placeholder-emerald-400 rounded-lg px-4 py-2 focus:ring focus:ring-emerald-500 focus:outline-none transition`}
                                placeholder="your@email.com"
                            />
                            {errors.email && (
                                <span className="text-red-400 text-sm mt-1">{errors.email}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="feedback" className="text-emerald-200 text-sm font-medium mb-2">
                                Your Feedback
                            </label>
                            <textarea
                                id="feedback"
                                name="feedback"
                                value={formData.feedback}
                                onChange={handleChange}
                                rows={4}
                                className={`bg-emerald-800/50 border ${
                                    errors.feedback ? 'border-red-500' : 'border-emerald-700'
                                } text-emerald-100 placeholder-emerald-400 rounded-lg px-4 py-2 focus:ring focus:ring-emerald-500 focus:outline-none transition`}
                                placeholder="Let us know your thoughts..."
                            />
                            {errors.feedback && (
                                <span className="text-red-400 text-sm mt-1">{errors.feedback}</span>
                            )}
                        </div>

                        {errors.submit && (
                            <div className="bg-red-500/20 border border-red-500 text-red-100 p-3 rounded">
                                {errors.submit}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full ${
                                isSubmitting 
                                    ? 'bg-emerald-700 cursor-not-allowed' 
                                    : 'bg-emerald-600 hover:bg-emerald-700'
                            } text-white font-medium py-2 px-4 rounded-lg shadow-lg transition focus:ring focus:ring-emerald-500 focus:outline-none`}
                        >
                            {isSubmitting ? <LoadingSpinner /> : 'Submit Feedback'}
                        </button>
                    </div>
                </form>
            )}
        </motion.div>
    )
}

