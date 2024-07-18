// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <footer className="bg-gray-900 text-white py-4 flex  md:flex-col items-center  px-6 md:px-12">
      <div className="flex">
        <div className="text-center md:text-left mb-4 md:mb-0">
          Created By
          <i className="fa-solid fa-heart text-red-500 mx-1"></i>
          <a
            href="https://www.linkedin.com/in/chetannada/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400"
            title="Aakash Yadav"
          >
            Aakash Yadav
          </a>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <i className="fa-solid fa-copyright mx-1"></i>
          {year}
        </div>
        <div className="text-center md:text-right">
          <a
            href="https://github.com/chetannada/Namaste-React"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400 font-bold"
            title="Zwiggy"
          >
            Zwiggy
          </a>
        </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  