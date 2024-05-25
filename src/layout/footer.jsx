function Footer() {
   return (
      <footer className="page-footer grey darken-1">
         <div className="footer-copyright">
            <div className="container">
               by zubrikaff © {new Date().getFullYear()}
               <a className="grey-text text-lighten-4 right" href="https://github.com/kubikzubik">
                  Repository
               </a>
            </div>
         </div>
      </footer>
   );
}
export {Footer};
