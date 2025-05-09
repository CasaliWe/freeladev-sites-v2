<div class="modal fade" id="modal-add-avaliacao" tabindex="-1" aria-labelledby="modal-add-avaliacao" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5">Adicionar nova avaliação +</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="<?= $base_url ?>modulos-admin/contents/avaliacoes/php/salvar-avaliacao.php" method="post" enctype="multipart/form-data">
          <div class="modal-body">
          
            <div class='mb-3'>
              <label class="small" for='nome-avaliacao'>Nome*</label>
              <input type='text' id='nome-avaliacao' name='nome-avaliacao' class='form-control' required>
            </div>

            <div class='mb-3'>
              <label class="small" for='empresa-avaliacao'>Emrpesa*</label>
              <input type='text' id='empresa-avaliacao' name='empresa-avaliacao' class='form-control' required>
            </div>

            <div class='mb-3'>
              <label class="small" for='cargo-avaliacao'>Cargo*</label>
              <input type='text' id='cargo-avaliacao' name='cargo-avaliacao' class='form-control' required>
            </div>

            <div class='mb-3'>
              <label class="small" for='avaliacao-avaliacao'>Avaliação*</label>
              <input type='text' id='avaliacao-avaliacao' name='avaliacao-avaliacao' class='form-control' required>
            </div>

            <div class='mb-3'>
              <label class="small" for='comentario-avaliacao'>Comentário*</label>
              <input type='text' id='comentario-avaliacao' name='comentario-avaliacao' class='form-control' required>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="submit" class="btn btn-primary">Salvar</button>
          </div>
      </form>
    </div>
  </div>
</div>