const logout = `
<div class="modal fade" id="logout" tabindex="-1" aria-labelledby="popUpLogout" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Logout</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer">
        <span>Kamu akan diarahkan ke halaman Login untuk masuk kembali ke akunmu</span>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" id="btnLogout" class="btn btn-danger">Logout</button>
      </div>
    </div>
  </div>
</div>
`;

export default logout;
