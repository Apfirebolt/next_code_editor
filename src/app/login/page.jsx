"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Fragment } from "react";
import axios from "axios";
import Cookie from "js-cookie";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);
    try {
      // Replace this with your real authentication endpoint
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });

      if (res.status !== 200) {
        throw new Error(res.data?.message || "Login failed");
      }

    const user = res.data;

    // store user object and token in cookies (7 days)
    Cookie.set("user", JSON.stringify(user), { expires: 7, sameSite: "Lax" });
    if (user.token) {
        Cookie.set("token", user.token, { expires: 7, sameSite: "Lax" });
        axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    }

      // on success redirect to protected page
      router.push("/editor");
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Fragment>
      <Header />
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Sign in to Code Editor
          </h1>
          <p className="text-sm text-center text-gray-500 mb-6">
            Enter your credentials to continue coding.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            <a className="text-blue-600 hover:underline" href="/register">
              Don't have an account? Sign up
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
