import re

with open('src/main.js', 'r') as f:
    content = f.read()

# We need to replace everything from `// Pages Template Strings` down to `};` at the end of productsData.
# In original, productsData is at line 362 to 373.
# Let's just find the start: `// Pages Template Strings`
# And the end: `const productsData = { ... };` which is defined later.

# To be safe, let's extract the part AFTER productsData:
after_products_data = content.split("};\n\nfunction renderProductPage(id) {")[1]

# Now we construct the new top half
new_top_half = """import './style.css';

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
    '10': { name: "Cinto de Couro Fino", price: "R$ 55,00", img: "/images/cinto_couro.png", desc: "Acessório essencial com acabamento de alta qualidade em couro e fivela metálica moderna.", details: "<ul><li>Couro Legítimo</li><li>Fivela Metálica</li><li>Acabamento Premium</li></ul>" },
    '11': { name: "Camiseta Básica Essence", price: "R$ 59,90", img: "/images/img_tshirt_white.png", desc: "Conforto absoluto em algodão premium. Essencial para o dia a dia moderno e versátil.", details: "<ul><li>Algodão Pima</li><li>Gola Redonda</li><li>Modelagem Regular</li></ul>" },
    '12': { name: "Camisa Henley Manga Longa", price: "R$ 89,90", img: "/images/img_henley.png", desc: "Toque sofisticado com botões frontais. Perfeita para transições de clima com elegância casual.", details: "<ul><li>Algodão com Elastano</li><li>Botões Mesclados</li><li>Trama Respirável</li></ul>" },
    '13': { name: "Polo Piquet Urban", price: "R$ 79,90", img: "/images/img_polo_navy.png", desc: "Corte estruturado e tecido respirável. A escolha certa para o ambiente de trabalho e momentos de lazer.", details: "<ul><li>Malha Piquet</li><li>Gola Estruturada</li><li>Fenda Lateral</li></ul>" },
    '14': { name: "Calça Chino Classic", price: "R$ 109,90", img: "/images/img_chino_pants.png", desc: "Modelagem slim com elastano para máximo conforto. Um clássico indispensável no guarda-roupa.", details: "<ul><li>Sarja com Elastano</li><li>Bolsos Faca</li><li>Aviamentos Metálicos</li></ul>" },
    '15': { name: "Bermuda Linho Blend", price: "R$ 84,90", img: "/images/img_linen_shorts.png", desc: "Leveza e frescor para os dias quentes. Acabamento refinado que garante um visual despojado arrumado.", details: "<ul><li>Mix de Linho e Algodão</li><li>Cós com Cordão</li><li>Leveza Extrema</li></ul>" },
    '16': { name: "Jaqueta Corta-Vento Minimal", price: "R$ 109,90", img: "/images/img_windbreaker.png", desc: "Proteção leve com design utilitário. Acabamento fosco que combina estilo e funcionalidade.", details: "<ul><li>Nylon Fosco</li><li>Capuz Embutido</li><li>Bolsos com Zíper</li></ul>" },
    '17': { name: "Camiseta Estonada Vintage", price: "R$ 64,90", img: "/images/img_vintage_tshirt.png", desc: "Visual desgastado com lavanderia especial. Despojada sem perder a qualidade premium.", details: "<ul><li>Lavagem Estonada</li><li>Toque Macio</li><li>Costura Reforçada</li></ul>" },
    '18': { name: "Camisa Oxford Slim", price: "R$ 99,90", img: "/images/img_oxford_shirt.png", desc: "Clássica e indispensável. Tecido resistente com caimento perfeito para ocasiões que exigem um pouco mais de formalidade.", details: "<ul><li>Tecido Oxford</li><li>Colarinho Americano</li><li>Modelagem Slim</li></ul>" },
    '19': { name: "Calça Jogger Moletinho", price: "R$ 94,90", img: "/images/img_jogger_pants.png", desc: "Conforto de moletom com aparência arrumada. A aliada perfeita para a correria da rotina urbana.", details: "<ul><li>Moletinho Leve</li><li>Punhos em Ribana</li><li>Ajuste Interno</li></ul>" },
    '20': { name: "Bermuda Moletom Relax", price: "R$ 69,90", img: "/images/img_sweat_shorts.png", desc: "Toque macio e caimento solto. Estruturada na medida para manter o estilo exposto até no lazer.", details: "<ul><li>Moletom sem Pelúcia</li><li>Cós com Elástico</li><li>Design Anatômico</li></ul>" },
    '21': { name: "Cardigan Tricô Leve", price: "R$ 104,90", img: "/images/img_cardigan.png", desc: "Sobreposição perfeita para noites frescas. Tecido leve que não amassa e complementa o estilo facilmente.", details: "<ul><li>Tricô Acrílico Blend</li><li>Fechamento Frontal</li><li>Modelagem Fluida</li></ul>" },
    '22': { name: "Camiseta Gola V Premium", price: "R$ 64,90", img: "/images/img_vneck_tshirt.png", desc: "Valoriza a silhueta com tecido extremamente macio. Versatilidade para composições em camadas.", details: "<ul><li>Viscolycra</li><li>Gola V Profunda</li><li>Ultra Maciez</li></ul>" },
    '23': { name: "Camisa Linho Manga Curta", price: "R$ 99,90", img: "/images/img_linen_shirt.png", desc: "Sofisticação e respirabilidade. Cortes modernos ideais para eventos casuais sob o sol.", details: "<ul><li>Linho Puro</li><li>Manga Curta</li><li>Fechamento em Botões Naturais</li></ul>" },
    '24': { name: "Polo Malha Fria", price: "R$ 74,90", img: "/images/img_cooling_polo.png", desc: "Caimento impecável com tecnologia antissuor. Ideal para manter o frescor com estilo o dia todo.", details: "<ul><li>Poliamida Tech</li><li>Proteção UV</li><li>Toque Gelado</li></ul>" },
    '25': { name: "Pulseira de Couro Natural", price: "R$ 59,90", img: "/images/img_leather_bracelet.png", desc: "Detalhe em couro genuíno. O toque final sutil que eleva qualquer composição casual.", details: "<ul><li>Couro Genuíno Traçado</li><li>Fecho Magnético</li><li>Acabamento Rustico</li></ul>" },
    '26': { name: "Calça Sarja Slim Fit", price: "R$ 109,90", img: "/images/img_twill_pants.png", desc: "Flexibilidade e estrutura em tons esverdeados. A peça curinga para alinhar o visual sem esforço.", details: "<ul><li>Sarja Premium</li><li>Botão Madeira</li><li>Modelagem Ajustada</li></ul>" },
    '27': { name: "Jaqueta Bomber Casual", price: "R$ 109,90", img: "/images/img_bomber_jacket.png", desc: "Atitude e estilo atemporal. Silhueta ajustada que proporciona um look urbano imediato.", details: "<ul><li>Exterior em Suede</li><li>Forro em Cetim</li><li>Gola Tipo Bomber</li></ul>" },
    '28': { name: "Moletom Masculino Classic", price: "R$ 89,90", img: "/images/img_moletom.png", desc: "Toque esportivo e fluido. Conforto inigualável para um visual clean e sofisticado e para o frio.", details: "<ul><li>Estilo Clássico</li><li>Bolso Frontal</li><li>Logo Minimalista</li></ul>" },
    '29': { name: "Polo Básica Estruturada", price: "R$ 79,90", img: "/images/img_polo_basica.png", desc: "Minimalismo elegante para temperaturas amenas. Pode ser usado sozinho ou sobrepondo peças.", details: "<ul><li>Tecido Estruturado</li><li>Toque Macio</li><li>Design Clean</li></ul>" },
    '30': { name: "Bermuda Casal de Sarja", price: "R$ 84,90", img: "/images/img_bermuda_sarja.png", desc: "Modelagem versátil e toque macio. Padrões discretos para curtir o fim de semana com elegância.", details: "<ul><li>Algodão Duplo</li><li>Corte Acima do Joelho</li><li>Versatilidade</li></ul>" },
};

const getProductCardsHTML = (limit = null) => {
    let entries = Object.entries(productsData);
    if (limit) {
        entries = entries.slice(0, limit);
    }
    return entries.map(([id, p]) => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}" class="product-img">
            <div class="product-info">
                <h3>${p.name}</h3>
                <p class="price">${p.price}</p>
                <p class="short-desc">${p.desc}</p>
                <a href="/product?id=${id}" class="btn btn-outline" data-link>Ver Produto</a>
            </div>
        </div>
    `).join('');
};

// Pages Template Strings
const pages = {
    '/': `
        <section class="hero" style="background-image: url('/images/hero.png'); background-position: center top;">
            <div class="hero-content container">
                <h1>Estilo Moderno para Pessoas Confiantes</h1>
                <p>Moda casual premium com design moderno.</p>
                <a href="/products" class="btn btn-primary" data-link>Compre Agora</a>
            </div>
        </section>
        
        <section class="featured-products container section">
            <h2 class="section-title">Produtos em Destaque</h2>
            <div class="product-grid">
                ${getProductCardsHTML(12)}
            </div>
        </section>
    `,
    '/products': `
        <div class="container section page-header">
            <h1 class="page-title">Nosso Catálogo</h1>
        </div>
        <section class="container section">
            <div class="product-grid">
                ${getProductCardsHTML()}
            </div>
        </section>
    `,
"""

# The remaining pages stay exactly the same.
# We need to extract them from the original file starting from `    '/about': \``
about_onward = "    '/about': `" + content.split("    '/about': `")[1].split("};\n\nfunction renderProductPage(id) {")[0]

final_content = new_top_half + about_onward + "};\n\nfunction renderProductPage(id) {" + after_products_data

with open('src/main.js', 'w') as f:
    f.write(final_content)

print("Replacement done!")
