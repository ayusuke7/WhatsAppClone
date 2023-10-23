import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro.page',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.css']
})
export class CadastroPage implements OnInit{
  selectedFile: File | null = null;
  imagePreview: string | null = null; // Variável para armazenar a pré-visualização

  imageLogo = "assets/image-global/logo.png.png"
  imageAltLogo = "Image View"

  @Input()
  public formData = {
    name: '',
    phone: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit(): void {}

  navegateToChat() {
    if (this.validateName() && this.validateNumber()) {
      this.router.navigate(['/chat']);
    } else {
      this.validationError();
    }
  }

  private validationError() {
    alert("Please fill in all fields correctly.");
  }

  validateName(): boolean {
    return this.formData.name.trim() !== '';
  }

  validateNumber(): boolean {
    let cleanNumber = this.formData.phone.replace(/[^0-9]+/g, "");
    return cleanNumber.length >= 10 && cleanNumber.length <= 15;
  }

  // Método para remover a Preview da imagem
  removeImage() {
    // Limpando a pré-visualização da imagem e redefine o valor do input de arquivo
    this.imagePreview = null;
    const fileInput = document.getElementById('photo') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  // Validação de imagem do perfil
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const resultado = e.target?.result;
        if (typeof resultado === 'string') {
          this.imagePreview = resultado;
        } else {
          this.imagePreview = null;
        }
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.imagePreview = null;
    }
  }

  uploadProfilePhoto() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('photo', this.selectedFile);

      this.http.post('/api/updateProfilePhoto', formData).subscribe(response => {
        // Lidar com a resposta do servidor
      });
    }
  }
}

