import React from "react";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = (event) => {
      const inputan = event.target.value;

      if (inputan.length <= 50) {
        this.setState({ title: inputan });
      }
    };

    this.onBodyChangeHandler = (event) => {
      this.setState(() => {
        return {
          body: event.target.value,
        };
      });
    };

    this.onSubmitHandler = (event) => {
      event.preventDefault();
      this.props.addNotes(this.state);
      this.setState({ title: "", body: "" });
    };
  }
  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <div className="container mx-auto px-4">
            <div className="flex justify-center mt-10 mb-10 ">
              <div className="flex flex-col w-full">
                <span>Sisa karakter : {50 - this.state.title.length}</span>
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.onTitleChangeHandler}
                  placeholder="Masukan judul disini!"
                  className="border border-gray-300 rounded px-2 py-1 mb-2"
                />
                <textarea
                  value={this.state.body}
                  onChange={this.onBodyChangeHandler}
                  placeholder="Masukan deskripsi disini!"
                  className="border border-gray-300 rounded px-2 py-1"
                ></textarea>
                <button
                  type="submit"
                  className="border border-gray-300 rounded-lg px-2 py-2 mt-2 bg-gray-950 text-white hover:shadow-lg hover:scale-95 transition-transform duration-300"
                >
                  Tambahkan catatan
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default FormComponent;
