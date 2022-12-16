const register = () => {
  const popUpRegister = document.querySelector('#isUser');
  popUpRegister.innerHTML += `
  <div class="modal fade" id="register" tabindex="-1" aria-labelledby="popupregister" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="registerTitle">Register</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form id="register-form">
          <div class="modal-body">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" id="username" name="username"
                placeholder="Username" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"
                placeholder="Email" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" name="password" aria-describedby="passwordHelpInline"
                required>
            </div>
            <div class="mb-3">
              <label for="confirmpassword" class="form-label">Confirm Password</label>
              <input type="confirmpassword" class="form-control" id="confirmpassword" name="confirmpassword" aria-describedby="confirmpasswordHelpInline"
                required>
            </div>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-secondary col-4" data-bs-dismis="modal"
              aria-label="Close">Cancel</button>
            <button type="submit" class="btn btn-success col-4" id="btnRegister">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
`;
};

export default register;
