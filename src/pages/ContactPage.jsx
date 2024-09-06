import React from "react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
const ContactPage = ({ id }) => {
  const form = useRef();
  const [loader, setloader] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setloader(true);

    emailjs
      .sendForm(
        "service_jjpb6tq",
        "template_eaw52ht",
        form.current,
        "vwSrJ918OllPQ-NVX"
      )
      .then(
        (result) => {
          setloader(false);
          console.log(result.text);
          alert("form submitted");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="flex flex-row bg-orange-100 w-full h-full px-50 py-50 ct-main"
      id={id}
    >
      <div className="flower-pattern"></div>
      <div className="left px-50 py-50 h-full w-full flex  flex-col align-center justify-center mx-20 my-20">
        <div className="flex flex-col align-center justify-center map-div leading-9">
          
          <h1 className="font-bold text-2xl  text-red-900 underline">ವಿಳಾಸ:</h1>
          <h1 className="font-bold text-xl  text-red-900 leading-9">ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ದೇವಸ್ಥಾನ,ಬಾಚಕೇರೆ ಸರಪಾಡಿ,ಮಾವಿನಕಟ್ಟೆ,<br />ಕರ್ನಾಟಕ 574265</h1>
           <br />
          <h1 className="font-bold text-2xl  text-red-900 underline ">ಗೂಗಲ್ ನಕ್ಷೆಗಳಲ್ಲಿ ಸ್ಥಳವನ್ನು ವೀಕ್ಷಿಸಿ:</h1><br />
          <iframe
            width="406"
            height="274"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=406&amp;height=274&amp;hl=en&amp;q=Shree%20Durgaparameshwari%20Temple%20Bachakere%20Sarapady,%20Mavinakatte%20mangalore+()&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>

          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=354e9c0ffd31ec88007fdf3dfcd239c2f9041a2c"
          ></script>
        </div>
      </div>
      <div className="right bg-orange-100 h-full w-full px-50 py-50">
        <section className=" px-50 py-50">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-red-900">
            ಸಂಪರ್ಕಿಸಿ
            </h2>
            {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> */}
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-red-900 "
                >
                  ನಿಮ್ಮ ಇಮೇಲ್ ಐಡಿ
                </label>
                <input
                 name="email"
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone number"
                  className="block mb-2 text-sm font-medium text-red-900"
                >
                 ಫೋನ್ ನಂಬರ್
                </label>
                <input
                name="subject"
                  type="phone number"
                  id="subject"
                  className="block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-red-900"
                >
                 ವಿಷಯ/ಸಲಹೆಗಳು
                </label>
                <textarea
                name="msg"
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-red-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                ಇಮೇಲ್ ಕಳುಹಿಸಿ
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
