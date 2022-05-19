import React, { useRef, useState } from 'react';

const NewsletterForm = ({ title = 'Subscribe to the newsletter' }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
    //   body: JSON.stringify({
    //     email: inputEl.current.value,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    // })
    const error = false;
    if (error) {
      setError(true);
      setMessage(
        'Your e-mail address is invalid or you are already subscribed!',
      );
      return;
    }

    inputEl.current.value = '';
    setError(false);
    setSubscribed(true);
    setMessage('Successfully! 🎉 You are now subscribed.');
  };

  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </div>
      <form
        className="flex flex-col sm:flex-row"
        onSubmit={subscribe}
        data-netlify="true"
        name="subscribe-newsletter"
      >
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="px-4 rounded-md w-72 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
            id="email-input"
            name="email"
            placeholder={
              subscribed ? "You're subscribed !  🎉" : 'Enter your email'
            }
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            className={`w-full rounded-md bg-primary-700 dark:bg-primary-700 py-2 px-4 font-medium text-white sm:py-0 ${
              subscribed
                ? 'cursor-default'
                : 'hover:bg-primary-800 dark:hover:bg-primary-800'
            } focus:outline-none focus:ring-2 focus:ring-primary-700 focus:ring-offset-2 dark:ring-offset-black`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'Thank you!' : 'Sign up'}
          </button>
        </div>
      </form>
      {error && (
        <div className="pt-2 text-sm text-red-500 w-72 dark:text-red-400 sm:w-96">
          {message}
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
);
