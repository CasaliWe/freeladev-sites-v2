<?php 
    include_once "config/config.php";
?>

<link rel="stylesheet" href="<?= $base_url ?>modulos-admin/contents/avaliacoes/css/style.css">


<p class="mb-4 small">Nesta sessão você pode atualizar as <strong>Avaliações</strong> do seu site!</p>


<!-- AVALIAÇÕES -->
<section>
    <button type="buttom" class="btn btn-success btn-sm mb-5" data-bs-toggle="modal" data-bs-target="#modal-add-avaliacao">Adicionar +</button>
    
    <?php foreach ($avaliacoes as $key => $avaliacao) { ?>
        <div class="mb-4 item-acordion accordion">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#avaliacao-<?= $avaliacao['id']; ?>" aria-expanded="false" aria-controls="avaliacao-<?= $avaliacao['id']; ?>">
                        <?= $avaliacao['nome']; ?>
                    </button>
                </h2>
                <div id="avaliacao-<?= $avaliacao['id']; ?>" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
        
                        <form onsubmit="loading()" action="<?= $base_url; ?>modulos-admin/contents/avaliacoes/php/editar-avaliacao.php" method="post">
                            <input type="hidden" name="id-avaliacao-editar" value="<?= $avaliacao['id']; ?>">
                            
                            <div class="mb-3">
                                <label for="nome" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="nome" name="nome" value="<?= $avaliacao['nome']; ?>" required>
                            </div>

                            <div class="mb-3">
                                <label for="empresa" class="form-label">Empresa</label>
                                <input type="text" class="form-control" id="empresa" name="empresa" value="<?= $avaliacao['empresa']; ?>" required>
                            </div>

                            <div class="mb-3">
                                <label for="cargo" class="form-label">Cargo</label>
                                <input type="text" class="form-control" id="cargo" name="cargo" value="<?= $avaliacao['cargo']; ?>" required>
                            </div>
                            
                            <div class="mb-3">
                                <label for="avaliacao" class="form-label">Avaliação</label>
                                <input type="text" class="form-control" id="avaliacao" name="avaliacao" value="<?= $avaliacao['avaliacao']; ?>" required>
                            </div>

                            <div class="mb-3">
                                <label for="comentario" class="form-label">Comentário</label>
                                <input type="text" class="form-control" id="comentario" name="comentario" value="<?= $avaliacao['comentario']; ?>" required>
                            </div>

                            <button type="submit" class="btn btn-primary">Salvar</button>

                            <a href="<?= $base_url; ?>modulos-admin/contents/avaliacoes/php/excluir-avaliacao.php?id=<?= $avaliacao['id']; ?>" class="btn btn-danger">Deletar</a>
                        </form>
        
                    </div>
                </div>
            </div>
        </div>
    <?php } ?>
 
</section>
<!-- AVALIAÇÕES -->



<script src="<?php echo $base_url ?>modulos-admin/contents/avaliacoes/js/app.js"></script>
