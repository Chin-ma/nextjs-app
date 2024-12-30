"use client"

import { useState } from 'react'
import Button from "@mui/material/Button"
import { Input } from "@mui/base/Input"
import { TextareaAutosize } from '@mui/base'
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';

export default function Survey() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        console.log('Survey submitted')
        setSubmitted(true)
    }

    // const [selected, setSelected] = useState('');
    // const handleChange = (event) => {
    //     setSelected(event.target.value);
    // }

    if (submitted) {
        return (
            <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-emerald-100 mb-4">Thank You!</h3>
                <p className="text-emerald-200">Your feedback is greatly appreciated.</p>
            </div>
        )
    }

    return (
        <div className="bg-emerald-900/50 p-8 rounded-lg shadow-lg w-full mx-auto">
            <h3 className="text-2xl font-bold text-emerald-100 mb-6">We Value Your Feedback</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6 bg-emerald-900 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col">
                        <label
                            htmlFor="name"
                            className="text-emerald-200 text-sm font-medium mb-2"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="bg-emerald-800/50 border border-emerald-700 text-emerald-100 placeholder-emerald-400 rounded-lg px-4 py-2 focus:ring focus:ring-emerald-500 focus:outline-none transition"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-emerald-200 text-sm font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="bg-emerald-800/50 border border-emerald-700 text-emerald-100 placeholder-emerald-400 rounded-lg px-4 py-2 focus:ring focus:ring-emerald-500 focus:outline-none transition"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>

                <div className="bg-emerald-800/50 p-6 rounded-lg shadow-lg">
                    <label className="block text-emerald-200 text-lg font-medium mb-4">
                        How did you find our website?
                    </label>
                    <RadioGroup defaultValue="search" className="space-y-4">
                        {[
                            { id: "search", label: "Search Engine" },
                            { id: "social", label: "Social Media" },
                            { id: "friend", label: "Friend Recommendation" },
                            { id: "other", label: "Other" },
                        ].map((item) => (
                            <div key={item.id} className="flex items-center space-x-3">
                                <Radio id={item.id} value={item.id} />
                                <label htmlFor={item.id} className="text-emerald-200 text-sm cursor-pointer">
                                    {item.label}
                                </label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>

                <div className="space-y-6 bg-emerald-900 p-6 rounded-lg shadow-md">
  <div className="flex flex-col">
    <label
      htmlFor="feedback"
      className="text-emerald-200 text-sm font-medium mb-2"
    >
      Any additional feedback?
    </label>
    <textarea
      id="feedback"
      rows={4}
      className="bg-emerald-800/50 border border-emerald-700 text-emerald-100 placeholder-emerald-400 rounded-lg px-4 py-2 focus:ring focus:ring-emerald-500 focus:outline-none transition"
      placeholder="Let us know your thoughts..."
    />
  </div>

  <button
    type="submit"
    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition focus:ring focus:ring-emerald-500 focus:outline-none"
  >
    Submit Feedback
  </button>
</div>

            </form>
        </div>
    )
}

