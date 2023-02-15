import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto } from 'src/produtos';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade: number = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('id'));
    this.produto = this.produtosService.getOne(productId);
  }

}
