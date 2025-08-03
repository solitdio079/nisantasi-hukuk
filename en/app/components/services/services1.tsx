export default function Services1(){
    return (<>
    <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col items-center space-y-4 text-center sm:mb-16 lg:mb-24">
        <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">Select the Best Plan for You!</h2>
        <p className="text-base-content/80 text-xl">
          Discover Our Flexible Plans, Compare Features, and Choose the Ideal Option for Your Needs.
        </p>
      </div>
      
      <div className="space-y-10">
        <div className="flex items-center justify-center gap-6 max-sm:flex-col">
          <label
            className="custom-option bg-base-100 group has-checked:shadow-base-300/10 w-full p-6 has-checked:shadow-sm sm:max-w-134.5"
          >
            <span className="item-center flex gap-5">
              <span className="text-base-content group-has-checked:text-primary flex-1 text-3xl font-semibold">
                Starter
              </span>
              <input type="radio" name="pricing" className="radio radio-primary" checked />
            </span>
            <span className="divider my-6"></span>
            <span className="flex flex-col">
              <span className="text-base-content group-has-checked:text-primary text-3xl font-semibold">
                $99
                <span className="group-has-checked:text-base-content/80 text-base-content/50 text-lg font-normal">
                  /month
                </span>
              </span>
              <span className="group-has-checked:text-base-content text-base-content/50 text-base">
                Ideal for Beginner owners.
              </span>
            </span>
          </label>
          <label
            className="custom-option bg-base-100 group has-checked:shadow-base-300/10 w-full p-6 has-checked:shadow-sm sm:max-w-134.5"
          >
            <span className="item-center flex gap-5">
              <span className="text-base-content group-has-checked:text-primary flex-1 text-3xl font-semibold">
                Lifetime Deal
              </span>
              <input type="radio" name="pricing" className="radio radio-primary" />
            </span>
            <span className="divider my-6"></span>
            <span className="flex flex-col">
              <span className="text-base-content group-has-checked:text-primary text-3xl font-semibold">
                $199
                <span className="group-has-checked:text-base-content/80 text-base-content/50 text-lg font-normal">
                  One Time Pyment
                </span>
              </span>
              <span className="group-has-checked:text-base-content text-base-content/50 text-base">
                Ideal for Beginner owners.
              </span>
            </span>
          </label>
        </div>
        <div className="divider divider-dotted text-base">What’s Included</div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div
            className="bg-base-100 rounded-box border-base-content/20 flex items-center justify-center gap-1.5 border px-3 py-2"
          >
            <div className="avatar avatar-placeholder">
              <div className="text-bg-soft-primary rounded-field w-7.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 12L6 15L9 12L6 9L3 12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 12L18 15L21 12L18 9L15 12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 6L12 9L15 6L12 3L9 6Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 18L12 21L15 18L12 15L9 18Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <span className="text-base-content font-medium">Components</span>
          </div>
          <div
            className="bg-base-100 rounded-box border-base-content/20 flex items-center justify-center gap-1.5 border px-3 py-2"
          >
            <div className="avatar avatar-placeholder">
              <div className="text-bg-soft-primary rounded-field w-7.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 12V15C21 15.5523 20.5523 16 20 16H4C3.44772 16 3 15.5523 3 15V5C3 4.44772 3.44772 4 4 4H13"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 20H17"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 16V20"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 16V20"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 4H21V8"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 9L21 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <span className="text-base-content font-medium">Templates</span>
          </div>
          <div
            className="bg-base-100 rounded-box border-base-content/20 flex items-center justify-center gap-1.5 border px-3 py-2"
          >
            <div className="avatar avatar-placeholder">
              <div className="text-bg-soft-primary rounded-field w-7.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 3V7C14 7.55228 14.4477 8 15 8H19"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <span className="text-base-content font-medium">Full Pages</span>
          </div>
          <div
            className="bg-base-100 rounded-box border-base-content/20 flex items-center justify-center gap-1.5 border px-3 py-2"
          >
            <div className="avatar avatar-placeholder">
              <div className="text-bg-soft-primary rounded-field w-7.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="12"
                    rx="1"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 20H17"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 16V20"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 16V20"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 12V8"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 12V11"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 12V10"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 12V11"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <span className="text-base-content font-medium">Dashboard</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="btn btn-primary btn-gradient btn-lg">
            Choose Plan
            <span className="icon-[tabler--arrow-right] size-5 shrink-0"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
    </>)
}