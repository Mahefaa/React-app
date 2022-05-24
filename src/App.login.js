import logo from './logo.svg';
import './App.css';
function MyInput(props){
  const {type,label}=props;
  return (
    <div class="form-floating mb-3">
      <input class="form-control" id="inputEmail" type={type} placeholder="name@example.com" />
      <label for="inputEmail">{label}</label>
    </div>
  )
}
function MyCard(props){
  const {children}=props;
  return(
    <div class="card shadow-lg border-0 rounded-lg mt-5">
      <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
      <div class="card-body">
        {children}
      </div>
      <div class="card-footer text-center py-3">
        <div class="small"><a href="register.html">Need an account? Sign up!</a></div>
      </div>
    </div>
  )
}
function App() {
  return (
    <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                              <MyCard>
                                <form>
                                  <MyInput type="email" label="Adresse E-mail"/>
                                  <MyInput type="password" label="Mot De Passe"/>
                                  <div class="form-check mb-3">
                                    <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                    <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                                  </div>
                                  <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <a class="small" href="password.html">Forgot Password?</a>
                                    <a class="btn btn-primary" href="index.html">Login</a>
                                  </div>
                                </form>
                              </MyCard>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
  );
}

export default App;
