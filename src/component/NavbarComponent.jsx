import React from "react";

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };

    this.onSearchHandler = (event) => {
      const search = event.target.value;
      this.setState({ search });

      this.props.onSearchChange(search);
    };
  }
  render() {
    return (
      <>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mt-5">
            <div className="flex justify-between w-screen">
              <div className="flex flex-col">
                <p>Projects / Notes App</p>
                <h2 className="font-semibold text-xl">Notes App</h2>
              </div>
              <form className="group relative">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="relative left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  />
                </svg>
                <input
                  className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                  type="text"
                  onChange={this.onSearchHandler}
                  value={this.search}
                  aria-label="Filter projects"
                  placeholder="Filter projects..."
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavbarComponent;
