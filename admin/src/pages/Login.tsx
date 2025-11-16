const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 via-purple-600 to-secondary-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">IBA</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>
          <p className="text-gray-600 mt-2">IBA Global Service LTD</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="label">Email Address</label>
            <input
              type="email"
              placeholder="admin@ibacleaning.co.uk"
              className="input"
            />
          </div>

          <div>
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn-primary w-full">
            Sign In
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          © 2024 IBA Global Service LTD. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Login
