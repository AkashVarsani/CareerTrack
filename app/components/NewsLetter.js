import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl max-sm:text-2xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
            <p className="mt-4 text-lg text-gray-300">
            Stay ahead in your career with expert insights, skill-building resources, and valuable opportunities delivered straight to your inbox.
            </p>
            <div className="mt-6 flex max-sm:flex-col max-w-md gap-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-p2 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-p2 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-p3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p2"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Weekly Career Insights</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
              Stay updated with the latest career trends, skill-building tips, and industry insights to help you navigate your professional journey.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">No Distractions, Just Value</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
              We focus on delivering meaningful content—no spam, just actionable guidance for your career success.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-p4 to-p1-trans opacity-30"
        />
      </div>
    </div>
  )
}
