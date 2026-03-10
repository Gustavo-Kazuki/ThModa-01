import './style.css';

// Pages Template Strings
const pages = {
    '/': `
        <section class="hero" style="background-image: url('/images/hero.png');">
            <div class="hero-content container">
                <h1>Estilo Moderno para Pessoas Confiantes</h1>
                <p>Moda casual premium com design moderno.</p>
                <a href="/products" class="btn btn-primary" data-link>Compre Agora</a>
            </div>
        </section>
        
        <section class="featured-products container section">
            <h2 class="section-title">Produtos em Destaque</h2>
            <div class="product-grid">
                <!-- Product 1 -->
                <div class="product-card">
                    <img src="/images/tshirt.png" alt="Camiseta Básica Masculina" class="product-img">
                    <div class="product-info">
                        <h3>Camiseta Básica Masculina</h3>
                        <p class="price">R$ 47,00</p>
                        <p class="short-desc">Camiseta básica confortável e estilosa para o dia a dia.</p>
                        <a href="/product?id=1" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="product-card">
                    <img src="/images/shirt.png" alt="Camisa Casual Masculina" class="product-img">
                    <div class="product-info">
                        <h3>Camisa Casual Masculina</h3>
                        <p class="price">R$ 89,00</p>
                        <p class="short-desc">Camisa casual premium de botões com detalhes elegantes.</p>
                        <a href="/product?id=2" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 3 -->
                <div class="product-card">
                    <img src="/images/dress.png" alt="Vestido Elegante Feminino" class="product-img">
                    <div class="product-info">
                        <h3>Vestido Elegante Feminino</h3>
                        <p class="price">R$ 120,00</p>
                        <p class="short-desc">Vestido minimalista perfeito para eventos noturnos.</p>
                        <a href="/product?id=3" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 4 -->
                <div class="product-card">
                    <img src="/images/jeans.png" alt="Jeans Denim Premium" class="product-img">
                    <div class="product-info">
                        <h3>Jeans Denim Premium</h3>
                        <p class="price">R$ 95,00</p>
                        <p class="short-desc">Jeans escuro de alta qualidade para um visual elegante.</p>
                        <a href="/product?id=4" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 5 -->
                <div class="product-card">
                    <img src="/images/jacket.png" alt="Jaqueta Casual Masculina" class="product-img">
                    <div class="product-info">
                        <h3>Jaqueta Casual Masculina</h3>
                        <p class="price">R$ 150,00</p>
                        <p class="short-desc">Uma jaqueta versátil para qualquer clima.</p>
                        <a href="/product?id=5" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 6 -->
                <div class="product-card">
                    <img src="/images/sneakers.png" alt="Tênis Moderno" class="product-img">
                    <div class="product-info">
                        <h3>Tênis Moderno</h3>
                        <p class="price">R$ 110,00</p>
                        <p class="short-desc">Tênis confortável com detalhes em preto e dourado.</p>
                        <a href="/product?id=6" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 7 -->
                <div class="product-card">
                    <img src="/images/moletom_masculino.png" alt="Moletom Premium Moderno" class="product-img">
                    <div class="product-info">
                        <h3>Moletom Premium Moderno</h3>
                        <p class="price">R$ 149,00</p>
                        <p class="short-desc">Moletom minimalista com tecido macio e caimento impecável.</p>
                        <a href="/product?id=7" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 8 -->
                <div class="product-card">
                    <img src="/images/polo_masculina.png" alt="Camisa Polo Elegante" class="product-img">
                    <div class="product-info">
                        <h3>Camisa Polo Elegante</h3>
                        <p class="price">R$ 79,00</p>
                        <p class="short-desc">Polo preta texturizada, ideal para ocasiões casuais e elegantes.</p>
                        <a href="/product?id=8" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 9 -->
                <div class="product-card">
                    <img src="/images/bermuda_sarja.png" alt="Bermuda Sarja Moderna" class="product-img">
                    <div class="product-info">
                        <h3>Bermuda Sarja Moderna</h3>
                        <p class="price">R$ 85,00</p>
                        <p class="short-desc">Bermuda de sarja chumbo, aliando conforto e estilo urbano.</p>
                        <a href="/product?id=9" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 10 -->
                <div class="product-card">
                    <img src="/images/cinto_couro.png" alt="Cinto de Couro Fino" class="product-img">
                    <div class="product-info">
                        <h3>Cinto de Couro Fino</h3>
                        <p class="price">R$ 55,00</p>
                        <p class="short-desc">Cinto de couro legítimo com fivela minimalista dourada.</p>
                        <a href="/product?id=10" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
            </div>
        </section>
    `,
    '/products': `
        <div class="container section page-header">
            <h1 class="page-title">Todos os Produtos</h1>
            <p>Navegue pelo nosso catálogo completo de moda casual moderna.</p>
        </div>
        <section class="container section">
            <div class="product-grid">
                <!-- Product 1 -->
                <div class="product-card">
                    <img src="/images/tshirt.png" alt="Camiseta Básica Masculina" class="product-img">
                    <div class="product-info">
                        <h3>Camiseta Básica Masculina</h3>
                        <p class="price">R$ 47,00</p>
                        <p class="short-desc">Camiseta básica confortável e estilosa para o dia a dia.</p>
                        <a href="/product?id=1" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="product-card">
                    <img src="/images/shirt.png" alt="Camisa Casual Masculina" class="product-img">
                    <div class="product-info">
                        <h3>Camisa Casual Masculina</h3>
                        <p class="price">R$ 89,00</p>
                        <p class="short-desc">Camisa casual premium de botões com detalhes elegantes.</p>
                        <a href="/product?id=2" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 3 -->
                <div class="product-card">
                    <img src="/images/dress.png" alt="Vestido Elegante Feminino" class="product-img">
                    <div class="product-info">
                        <h3>Vestido Elegante Feminino</h3>
                        <p class="price">R$ 120,00</p>
                        <p class="short-desc">Vestido minimalista perfeito para eventos noturnos.</p>
                        <a href="/product?id=3" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <div class="product-card">
                    <img src="/images/jeans.png" alt="Jeans Denim Premium" class="product-img">
                    <div class="product-info">
                        <h3>Jeans Denim Premium</h3>
                        <p class="price">R$ 95,00</p>
                        <p class="short-desc">Jeans escuro de alta qualidade para um visual elegante.</p>
                        <a href="/product?id=4" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <div class="product-card">
                    <img src="/images/jacket.png" alt="Jaqueta Casual" class="product-img">
                    <div class="product-info">
                        <h3>Jaqueta Casual Masculina</h3>
                        <p class="price">R$ 150,00</p>
                        <p class="short-desc">Uma jaqueta versátil para qualquer clima.</p>
                        <a href="/product?id=5" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <div class="product-card">
                    <img src="/images/sneakers.png" alt="Tênis Moderno" class="product-img">
                    <div class="product-info">
                        <h3>Tênis Moderno</h3>
                        <p class="price">R$ 110,00</p>
                        <p class="short-desc">Tênis confortável com detalhes em preto e dourado.</p>
                        <a href="/product?id=6" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 7 -->
                <div class="product-card">
                    <img src="/images/moletom_masculino.png" alt="Moletom Premium Moderno" class="product-img">
                    <div class="product-info">
                        <h3>Moletom Premium Moderno</h3>
                        <p class="price">R$ 149,00</p>
                        <p class="short-desc">Moletom minimalista com tecido macio e caimento impecável.</p>
                        <a href="/product?id=7" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 8 -->
                <div class="product-card">
                    <img src="/images/polo_masculina.png" alt="Camisa Polo Elegante" class="product-img">
                    <div class="product-info">
                        <h3>Camisa Polo Elegante</h3>
                        <p class="price">R$ 79,00</p>
                        <p class="short-desc">Polo preta texturizada, ideal para ocasiões casuais e elegantes.</p>
                        <a href="/product?id=8" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 9 -->
                <div class="product-card">
                    <img src="/images/bermuda_sarja.png" alt="Bermuda Sarja Moderna" class="product-img">
                    <div class="product-info">
                        <h3>Bermuda Sarja Moderna</h3>
                        <p class="price">R$ 85,00</p>
                        <p class="short-desc">Bermuda de sarja chumbo, aliando conforto e estilo urbano.</p>
                        <a href="/product?id=9" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
                <!-- Product 10 -->
                <div class="product-card">
                    <img src="/images/cinto_couro.png" alt="Cinto de Couro Fino" class="product-img">
                    <div class="product-info">
                        <h3>Cinto de Couro Fino</h3>
                        <p class="price">R$ 55,00</p>
                        <p class="short-desc">Cinto de couro legítimo com fivela minimalista dourada.</p>
                        <a href="/product?id=10" class="btn btn-outline" data-link>Ver Produto</a>
                    </div>
                </div>
            </div>
        </section>
    `,
    '/about': `
        <div class="container section page-header">
            <h1 class="page-title">Sobre Nós</h1>
        </div>
        <section class="container section about-content">
            <div class="about-grid">
                <div class="about-text">
                    <h2>Nossa Missão</h2>
                    <p>Na TH Moda, acreditamos que a moda deve ser uma integração perfeita de estética moderna e conforto incomparável. Nós nos esforçamos para criar roupas que não apenas pareçam profissionais, mas que também sejam genuinamente boas de vestir. Nossa missão é capacitar indivíduos confiantes através da moda casual premium com design moderno.</p>
                    <p>Fundada em 2026, focamos em um layout minimalista, estética de moda masculina refinada e uma experiência de compra sem esforço. Fundos brancos limpos, silhuetas pretas afiadas e detalhes dourados elegantes incorporam nossa filosofia de estilo central.</p>
                </div>
                <div class="about-image">
                    <img src="/images/hero.png" alt="Sobre o nosso estilo" style="width: 100%; border-radius: 4px;">
                </div>
            </div>
        </section>
    `,
    '/contact': `
        <div class="container section page-header">
            <h1 class="page-title">Contato</h1>
        </div>
        <section class="container section contact-content">
            <div class="contact-grid">
                <div class="contact-info">
                    <h2>Entre em Contato</h2>
                    <p>Estamos sempre aqui para ajudar. Entre em contato com nosso suporte ao cliente para qualquer dúvida sobre nossas coleções ou seus pedidos.</p>
                    <ul>
                        <li><strong>Telefone:</strong> (81) 9929-2908</li>
                        <li><strong>E-mail:</strong> contato@thmoda.com.br</li>
                        <li><strong>Endereço:</strong> Rua Edgar Barbosa dos Anjos, 38 – Recife, PE</li>
                    </ul>
                </div>
                <div class="contact-form">
                    <form onsubmit="event.preventDefault(); alert('Mensagem Enviada!');">
                        <div class="form-group">
                            <label>Nome</label>
                            <input type="text" placeholder="Seu Nome" required>
                        </div>
                        <div class="form-group">
                            <label>E-mail</label>
                            <input type="email" placeholder="Seu E-mail" required>
                        </div>
                        <div class="form-group">
                            <label>Mensagem</label>
                            <textarea rows="5" placeholder="Como podemos ajudar?" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </section>
    `,
    '/privacy': `
        <div class="container section page-header">
            <h1 class="page-title">Política de Privacidade</h1>
        </div>
        <section class="container section policies-content">
            <div class="policy-block">
                <h2>1. Informações Gerais</h2>
                <p>A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários e visitantes do site da <strong>TH Moda</strong> (CNPJ: 47.635.109/0001-69), com o intuito de demonstrar absoluta transparência quanto ao assunto e esclarecer a todos interessados sobre os tipos de dados que são coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou excluir as suas informações pessoais.</p>
                <p>Nossa sede física está localizada na Rua Edgar Barbosa dos Anjos, 38 – Recife – PE.</p>

                <h2>2. Como recolhemos os dados pessoais do usuário?</h2>
                <p>Os dados pessoais do usuário são recolhidos pela plataforma da seguinte forma: quando o usuário interage e compra através do nosso site ou WhatsApp, coletamos os dados de identificação básicos, como e-mail, nome, endereço, e telefone.</p>

                <h2>3. Para que finalidades utilizamos os dados pessoais?</h2>
                <p>Os dados pessoais do usuário coletados e armazenados pelo site têm por finalidade melhorar a sua experiência em nossos serviços e envios da loja.</p>

                <h2>4. Contato</h2>
                <p>Em caso de dúvidas em relação a nossa política de privacidade, o usuário pode entrar em contato conosco pelo e-mail: contato@thmoda.com.br ou pelo telefone (81) 9929-2908.</p>
            </div>
        </section>
    `,
    '/terms': `
        <div class="container section page-header">
            <h1 class="page-title">Termos de Uso</h1>
        </div>
        <section class="container section policies-content">
            <div class="policy-block">
                <h2>1. Aceitação dos Termos</h2>
                <p>Ao acessar o site da <strong>TH Moda</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.</p>

                <h2>2. Uso do Site</h2>
                <p>É concedida permissão para visualizar e adquirir produtos em nosso e-commerce para uso pessoal e não comercial. A TH Moda (CNPJ: 47.635.109/0001-69, situada em Rua Edgar Barbosa dos Anjos, 38 – Recife – PE) detém todos os direitos sobre o material publicado em nossas redes e site.</p>

                <h2>3. Modificações e Preços</h2>
                <p>Os preços e de nossos produtos estão sujeitos a alterações sem aviso prévio. Reservamo-nos o direito de, a qualquer momento, modificar ou descontinuar o Produto (ou qualquer parte ou conteúdo do mesmo).</p>
                
                <h2>4. Contato e Suporte</h2>
                <p>Podemos ser contatados a qualquer momento pelo e-mail contato@thmoda.com.br ou telefone (81) 9929-2908 para esclarecimentos sobre nossos termos de uso.</p>
            </div>
        </section>
    `,
    '/returns': `
        <div class="container section page-header">
            <h1 class="page-title">Política de Troca e Devolução</h1>
        </div>
        <section class="container section policies-content">
            <div class="policy-block">
                <h2>1. Condições Gerais</h2>
                <p>A nossa política de trocas e devoluções é baseada no Código de Defesa do Consumidor e nosso compromisso de que você ame a sua compra. Caso você não esteja satisfeito com a sua compra, poderá trocar ou devolver o produto adquirido na <strong>TH Moda</strong> (CNPJ: 47.635.109/0001-69).</p>

                <h2>2. Prazo para Troca ou Devolução</h2>
                <p>Em caso de arrependimento da compra, você tem até 7 (sete) dias corridos a partir do recebimento do produto para solicitar o estorno e devolução da peça. Para trocas por tamanho ou defeitos, o prazo é estendido para 30 (trinta) dias úteis após a entrega do pedido.</p>

                <h2>3. Condições para Devolução</h2>
                <p>O produto deve ser devolvido em sua embalagem original, sem indícios de uso ou lavagem, com todas as etiquetas ainda afixadas e acompanhado de todos os acessórios originais enviados junto ao produto.</p>
                
                <h2>4. Como iniciar o processo?</h2>
                <p>Para solicitar uma devolução ou troca, basta entrar em contato via WhatsApp no número (81) 9929-2908 ou enviar um e-mail para contato@thmoda.com.br, informando o número do pedido e o motivo da troca. Aguarde nossas instruções de postagem ou coleta para remeter o produto à nossa sede: Rua Edgar Barbosa dos Anjos, 38 – Recife – PE.</p>
            </div>
        </section>
    `,
    '/shipping': `
        <div class="container section page-header">
            <h1 class="page-title">Política de Entrega</h1>
        </div>
        <section class="container section policies-content">
            <div class="policy-block">
                <h2>1. Prazos e Expedição</h2>
                <p>A <strong>TH Moda</strong> cuida da sua encomenda com exclusividade agilidade. Nossos produtos são expedidos de nossa matriz (Rua Edgar Barbosa dos Anjos, 38 – Recife – PE), em uma janela de até 2 dias úteis logo após a nossa equipe confirmar o pagamento diretamente no seu atendimento via WhatsApp.</p>

                <h2>2. Modalidades de Envio</h2>
                <p>Realizamos envio para todas as regiões do Brasil. Trabalhamos em parceria com os Correios e as melhores transportadoras. O prazo final pode variar de acordo com o CEP de destino e a modalidade de entrega acordada em seu contato conosco pelo Whatsapp.</p>

                <h2>3. Rastreamento e Atualizações</h2>
                <p>Você receberá o código de rastreamento no seu canal de atendimento via WhatsApp ou através do e-mail (contato@thmoda.com.br) no exato momento em que sua compra for despachada. Assim, você poderá acompanhar cada passo até o pacote alcançar você.</p>
                
                <h2>4. Insucesso de Entrega</h2>
                <p>Caso haja alguma dificuldade, como destinatário ausente ou imprevistos por parte dos Correios, entraremos em contato com você pelo telefone (81) 9929-2908 para agilizar a resolução do problema.</p>
            </div>
        </section>
    `
};

const productsData = {
    '1': { name: "Camiseta Básica Masculina", price: "R$ 47,00", img: "/images/tshirt.png", desc: "Uma camiseta preta com caimento perfeito, feita 100% de algodão premium.", details: "<ul><li>100% Algodão</li><li>Ajuste Clássico</li><li>Lavável à Máquina</li></ul>" },
    '2': { name: "Camisa Casual Masculina", price: "R$ 89,00", img: "/images/shirt.png", desc: "Camisa preta de botões elegante com detalhes de alta qualidade em dourado na gola.", details: "<ul><li>Ajuste Slim</li><li>Detalhes de Costura Dourada</li><li>Mistura de Tecidos Premium</li></ul>" },
    '3': { name: "Vestido Elegante Feminino", price: "R$ 120,00", img: "/images/dress.png", desc: "Um vestido preto minimalista e bem estruturado, perfeito para todas as ocasiões.", details: "<ul><li>Silhueta Linha A</li><li>Zíper Oculto</li><li>Tecido com Elastano</li></ul>" },
    '4': { name: "Jeans Denim Premium", price: "R$ 95,00", img: "/images/jeans.png", desc: "Jeans escuro afiado e confortável com construção robusta e ajuste sob medida.", details: "<ul><li>Perna Reta</li><li>Estilo 5 Bolsos</li><li>Denim Durável</li></ul>" },
    '5': { name: "Jaqueta Casual Masculina", price: "R$ 150,00", img: "/images/jacket.png", desc: "Jaqueta casual masculina versátil com vários bolsos utilitários.", details: "<ul><li>Resistente ao Clima</li><li>Múltiplos Bolsos</li><li>Isolamento Leve</li></ul>" },
    '6': { name: "Tênis Moderno", price: "R$ 110,00", img: "/images/sneakers.png", desc: "Tênis preto elegante com destaques dourados ousados e máximo conforto.", details: "<ul><li>Malha Respirável</li><li>Sola Amortecida</li><li>Detalhes em Dourado</li></ul>" },
    '7': { name: "Moletom Premium Moderno", price: "R$ 149,00", img: "/images/moletom_masculino.png", desc: "Moletom preto minimalista, confeccionado com tecido felpado super macio para um visual urbano elegante.", details: "<ul><li>Algodão Felpado</li><li>Capuz Ajustável</li><li>Bolso Canguru</li></ul>" },
    '8': { name: "Camisa Polo Elegante", price: "R$ 79,00", img: "/images/polo_masculina.png", desc: "Camisa polo premium com caimento ajustado e detalhes refinados no colarinho.", details: "<ul><li>Piquet de Algodão</li><li>Ajuste Casual Slim</li><li>Botões Exclusivos</li></ul>" },
    '9': { name: "Bermuda Sarja Moderna", price: "R$ 85,00", img: "/images/bermuda_sarja.png", desc: "Bermuda de sarja com tom escuro premium. Proporciona versatilidade e charme aos visuais descontraídos.", details: "<ul><li>Tecido de Sarja</li><li>Corte Reto</li><li>Bolsos Funcionais</li></ul>" },
    '10': { name: "Cinto de Couro Fino", price: "R$ 55,00", img: "/images/cinto_couro.png", desc: "Acessório essencial com acabamento de alta qualidade em couro e fivela metálica moderna.", details: "<ul><li>Couro Legítimo</li><li>Fivela Metálica</li><li>Acabamento Premium</li></ul>" }
};

function renderProductPage(id) {
    const product = productsData[id];
    if (!product) return '<h2>Produto não encontrado</h2>';

    // Create WhatsApp Message text
    const waMessage = encodeURIComponent(`Olá TH Moda, gostaria de comprar: ${product.name} (${product.price}).`);

    return `
        <div class="container section page-header">
            <a href="/products" data-link class="back-link">← Voltar para Produtos</a>
        </div>
        <section class="container section product-details-section">
            <div class="product-gallery">
                <img src="${product.img}" alt="${product.name}" class="main-product-img">
            </div>
            <div class="product-info-full">
                <h1 class="product-title">${product.name}</h1>
                <p class="product-price">${product.price}</p>
                <div class="product-description">
                    <p>${product.desc}</p>
                </div>
                <div class="product-specs">
                    <h3>Detalhes do Produto</h3>
                    ${product.details}
                </div>
                <div class="product-actions" style="display: flex; gap: 15px; flex-direction: column;">
                    <button id="btn-add-cart" onclick="addToCart('${id}')" class="btn btn-outline">
                        Adicionar ao carrinho
                    </button>
                    <a href="https://wa.me/558199292908?text=${waMessage}" target="_blank" class="btn btn-primary btn-whatsapp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> 
                        Comprar via WhatsApp
                    </a>
                </div>
                
                <div class="purchase-info">
                    <h3>Informações de compra</h3>
                    <ul>
                        <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg> Entrega para todo o Brasil</li>
                        <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg> Envio em até 2 dias úteis após confirmação do pedido</li>
                        <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg> Pagamento combinado diretamente no atendimento via WhatsApp</li>
                        <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Atendimento de segunda a sábado</li>
                    </ul>
                </div>
            </div>
        </section>
    `;
}

const router = () => {
    const path = window.location.pathname;
    const urlParams = new URLSearchParams(window.location.search);
    const root = document.getElementById('app-root');

    if (path === '/product') {
        const id = urlParams.get('id');
        root.innerHTML = renderProductPage(id);
    } else if (path === '/cart') {
        root.innerHTML = renderCartPage();
    } else {
        root.innerHTML = pages[path] || pages['/'];
    }

    // Re-attach link event listeners inside dynamic content
    attachLinks();
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const attachLinks = () => {
    document.querySelectorAll('[data-link]').forEach(link => {
        link.removeEventListener('click', linkClickHandler);
        link.addEventListener('click', linkClickHandler);
    });
};

const linkClickHandler = e => {
    e.preventDefault();
    navigateTo(e.currentTarget.href);
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]') || e.target.closest('[data-link]')) {
            const link = e.target.matches('[data-link]') ? e.target : e.target.closest('[data-link]');
            e.preventDefault();
            navigateTo(link.href);
        }
    });

    updateCartCounter();
    router();
});

// --- Cart Logic ---
let cart = JSON.parse(localStorage.getItem('thmoda_cart')) || [];

function saveCart() {
    localStorage.setItem('thmoda_cart', JSON.stringify(cart));
    updateCartCounter();
}

function updateCartCounter() {
    const counter = document.getElementById('cart-counter');
    if (counter) {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        counter.textContent = totalItems;
        counter.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

window.addToCart = (id) => {
    const item = cart.find(i => i.id === String(id));
    if (item) {
        item.qty += 1;
    } else {
        cart.push({ id: String(id), qty: 1 });
    }
    saveCart();

    // Feedback visual
    const btn = document.getElementById('btn-add-cart');
    if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Adicionado! ✓';
        btn.style.backgroundColor = '#2ecc71';
        btn.style.color = '#fff';
        btn.style.borderColor = '#2ecc71';

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.backgroundColor = '';
            btn.style.color = '';
            btn.style.borderColor = '';
        }, 2000);
    } else {
        alert('Produto adicionado ao carrinho!');
    }
};

window.updateCartQty = (id, change) => {
    const item = cart.find(i => i.id === String(id));
    if (item) {
        item.qty += change;
        if (item.qty < 1) item.qty = 1;
        saveCart();
        router();
    }
};

window.removeFromCart = (id) => {
    cart = cart.filter(i => i.id !== String(id));
    saveCart();
    router();
};

window.checkoutWhatsApp = () => {
    if (cart.length === 0) return;

    let text = 'Pedido no site TH Moda\n\n';
    let total = 0;

    cart.forEach(item => {
        const p = productsData[item.id];
        if (p) {
            const price = parseFloat(p.price.replace('R$ ', '').replace(',', '.'));
            const sub = price * item.qty;
            total += sub;
            text += `${item.qty}x ${p.name} - R$ ${sub.toFixed(2).replace('.', ',')}\n`;
        }
    });

    text += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`;

    const waUrl = `https://wa.me/558199292908?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    // Optional: Clear cart after clicking checkout
    // cart = [];
    // saveCart();
    // router();
};

function renderCartPage() {
    if (cart.length === 0) {
        return `
            <div class="container section page-header">
                <h1 class="page-title">Seu Carrinho</h1>
            </div>
            <section class="container section" style="text-align: center; min-height: 40vh;">
                <h2>Seu carrinho está vazio.</h2>
                <p style="margin: 20px 0; color: var(--color-light-text);">Navegue pelos nossos produtos e adicione itens ao carrinho.</p>
                <a href="/products" class="btn btn-primary" data-link>Ver Produtos</a>
            </section>
        `;
    }

    let total = 0;
    const cartItemsHtml = cart.map(item => {
        const p = productsData[item.id];
        if (!p) return '';
        const price = parseFloat(p.price.replace('R$ ', '').replace(',', '.'));
        const subtotal = price * item.qty;
        total += subtotal;

        return `
            <div class="cart-item">
                <div class="cart-item-details">
                    <img src="${p.img}" alt="${p.name}" class="cart-item-img">
                    <div>
                        <h3>${p.name}</h3>
                        <p class="cart-item-price">${p.price}</p>
                    </div>
                </div>
                <div class="cart-item-qty">
                    <button onclick="updateCartQty('${item.id}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="updateCartQty('${item.id}', 1)">+</button>
                </div>
                <div class="cart-item-subtotal">
                    R$ ${subtotal.toFixed(2).replace('.', ',')}
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">&times;</button>
            </div>
        `;
    }).join('');

    return `
        <div class="container section page-header">
            <h1 class="page-title">Seu Carrinho</h1>
        </div>
        <section class="container section cart-section">
            <div class="cart-items-container">
                <div class="cart-header">
                    <span>Produto</span>
                    <span style="text-align: center;">Quantidade</span>
                    <span>Subtotal</span>
                    <span></span>
                </div>
                ${cartItemsHtml}
            </div>
            <div class="cart-summary">
                <h3>Resumo do Pedido</h3>
                <div class="cart-total">
                    <span>Total:</span>
                    <span>R$ ${total.toFixed(2).replace('.', ',')}</span>
                </div>
                <button onclick="checkoutWhatsApp()" class="btn btn-primary w-100 btn-whatsapp" style="margin-top: 20px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    Finalizar pedido via WhatsApp
                </button>
                <a href="/products" data-link class="btn btn-outline w-100" style="margin-top: 10px;">Continuar Comprando</a>
            </div>
        </section>
    `;
}
