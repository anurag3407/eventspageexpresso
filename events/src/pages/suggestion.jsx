import React from 'react'

const suggestion = () => {
  return (
	<div className="min-h-screen bg-black flex items-center justify-center p-4">
	<div className="w-full max-w-lg bg-black text-white">
	  <div className="text-center mb-8">
		<h1 className="text-3xl font-extrabold">SUGGEST EVENTS</h1>
	  </div>

	  <form className="space-y-6">
		<div className="flex flex-wrap gap-4">
		  <input
			type="text"
			placeholder="Name"
			className="flex-1 py-3 px-4 bg-gray-900 text-white rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
			aria-label="Name"
		  />
		  <input
			type="text"
			placeholder="Contact"
			className="flex-1 py-3 px-4 bg-gray-900 text-white rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
			aria-label="Contact"
		  />
		</div>

		<div>
		  <textarea
			placeholder="Suggestion:"
			className="w-full h-32 py-3 px-4 bg-gray-900 text-white rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
			aria-label="Suggestion"
		  ></textarea>
		</div>

		<div className="text-center">
		  <button
			type="submit"
			className="w-1/3 py-3 rounded-full bg-white text-black font-bold hover:opacity-90 active:scale-95 transition-all"
		  >
			Submit
		  </button>
		</div>
	  </form>
	</div>
  </div>
  )
}

export default suggestion