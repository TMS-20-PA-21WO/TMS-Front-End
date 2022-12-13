const login = () => {
  const popUpLogin = document.querySelector('#isUser');
  popUpLogin.innerHTML += `
  <div class="modal fade" id="login" tabindex="-1" aria-labelledby="popuplogin" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form id="login-form">
            <div class="modal-body">
                <div class="mb-3">
                  <label for="loginemail" class="form-label">Email</label>
                  <input type="email" class="form-control" id="loginemail" name="email" aria-describedby="emailHelp"
                    required>
                </div>
                <div class="mb-3">
                  <label for="loginpassword" class="form-label">Password</label>
                  <input type="password" class="form-control" id="loginpassword" name="password" aria-describedby="passwordHelpInline"
                    required>
                </div>
            </div>        
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" id="btnLogin" class="btn btn-success">Login</button>
            </div>
        </form>
      </div>
    </div>
  </div>
    `;
};

export default login;
