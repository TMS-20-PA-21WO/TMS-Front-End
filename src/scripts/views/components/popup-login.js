const login = () => {
  const popUpLogin = document.querySelector('#isUser');
  popUpLogin.innerHTML += `
<div class="modal fade" id="login" tabindex="-1" aria-labelledby="popuplogin" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content container">
      <div class="modal-header">
        <h4 class="modal-title" id="loginTitle">Login</h4>
        <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
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
        <div class="modal-footer justify-content-between">
          <button type="button" class="btn btn-secondary col-4" data-bs-dismis="modal"
            aria-label="Close">Cancel</button>
          <button type="submit" class="btn btn-success col-4" id="btnLogin">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
`;
};

export default login;
