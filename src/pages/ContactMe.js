import React from "react";
import cs from 'classnames'
import resume from "../Ayami_Higashi_Resume.pdf";
import Folder from "../components/Folder";

function validateEmail(email) {
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}

const ContactMe = () => {
    // Email form state
  const [form, setForm] = React.useState({});
  const nameStatus = form.name?.length > 0 ? 'is-valid' : ''
  const messageStatus = form.message?.length > 0 ? 'is-valid' : ''
  const emailStatus = !form.email?.length > 0
    ? ''
    : validateEmail(form.email)
    ? 'is-valid'
    : 'is-invalid'
  const canSubmit = nameStatus === 'is-valid'
    && messageStatus === 'is-valid'
    && emailStatus === 'is-valid'

const [showEmailSuccess, setShowEmailSuccess] = React.useState(false)

  return (
    <div className="container pt-3 mt-5">
      <div className="mt-4" id="Contact_Me">
        <h2>Contact Me</h2>

        <Folder tabName="Contact Info">
          <form
            onSubmit={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setShowEmailSuccess(true)
              setTimeout(() => {
                setForm({})
                setShowEmailSuccess(false)
              }, 1500)
            }}
          >
            <div className="form-group has-success d-flex align-items-center justify-content-between">
              <label htmlFor="name" className="mr-3">
                Name:
              </label>
              <input
                id="name"
                type="text"
                className={cs(
                    'form-control w-75', 
                    { [nameStatus]: true }
                )}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                value={form.name || ""}
              />
            </div>
            <div className="form-group d-flex align-items-center justify-content-between">
              <label htmlFor="email" className="mr-3">
                Email:
              </label>
              <input
                id="email"
                type="text"
                className={cs(
                    "form-control w-75",
                    { [emailStatus]: true }
                )}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                value={form.email || ""}
              />
            </div>
            <div className="form-group d-flex align-items-center justify-content-between">
              <label htmlFor="message" className="mr-3">
                Message:
              </label>
              <textarea
                rows={4}
                id="message"
                type="text"
                className={cs(
                    "form-control w-75",
                    { [messageStatus]: true }
                )}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                value={form.message || ""}
              />
            </div>
            <div className="d-flex justify-content-end">
              <div className="d-flex align-items-center">
                <b 
                className={cs(
                    "mb-0 mr-2 text-success",
                    { 'd-none': !showEmailSuccess }
                    )}
                 style={{ fontSize: 14 }}
                 >
                    Email sent!
                    </b>
                <button
                  className="btn btn-sm mr-3 btn-primary border-dark"
                  disabled={!canSubmit || showEmailSuccess}
                  type="submit"
                >
                  <span className="btn-text">Send</span>
                </button>
              </div>
            </div>
          </form>
        </Folder>

        <Folder tabName="Resume">
          <p>Click to view my resume</p>
          <a
            href={resume}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm mr-2 btn-primary border-dark"
            type="button"
          >
            <span className="btn-text">My resume</span>
          </a>
        </Folder>

        <Folder tabName="Links">
          <p>Links to personal Linked In and GitHub accounts</p>
          <a
            href="https://www.linkedin.com/in/ayami-higashi-6a53b8230/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm mr-2 btn-primary border-dark"
            type="button"
          >
            <span className="btn-text">Linked In</span>
          </a>
          <a
            href="https://github.com/hiayami"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm mr-2 btn-primary border-dark"
            type="button"
          >
            <span className="btn-text">GitHub</span>
          </a>
        </Folder>
      </div>
    </div>
  );
};

export default ContactMe;
