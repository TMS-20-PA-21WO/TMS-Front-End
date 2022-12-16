const logout = () => {
  const popUpLogout = document.querySelector('#isUser');
  popUpLogout.innerHTML += `
<div class="modal fade" id="logout" tabindex="-1" aria-labelledby="popuplogout" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content container">
      <div class="modal-header">
        <h4 class="modal-title" id="logoutTitle">Logout</h4>
        <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <span>Apakah kamu yakin akan keluar?</span>
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-secondary col-4" data-bs-dismis="modal"
          aria-label="Close">Cancel</button>
        <button type="button" class="btn btn-danger col-4" id="btnLogout">Logout</button>
      </div>
    </div>
  </div>
</div>
  `;
};

export default logout;
