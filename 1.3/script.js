console.log(`auuu`)
window.customizationStepsConfig = [
	{
		stepTitle:"Tipo da Lente",
		showStepWhen:[
			{
				title:"Tipo de Óculos",
				is:"=",
				value:"Com Grau"
			}
		]
	},
	{
		stepTitle:"Acabamento da Lente",
		showStepWhen:[
			{
				title:"Tipo de Óculos",
				is:"!=",
				value:"Somente a Armação"
			}
		]
	},
	{
		stepTitle:"Receita Oftálmica",
		showStepWhen:[
			{
				title:"Tipo de Óculos",
				is:"=",
				value:"Com Grau"
			}
		]
	}
]
window.customizationDescriptions = [
	{
		title: "Proteção Clássica",
		description: "Lentes anti-reflexo e resistentes a arranhões que protegem contra raios UV"
	},
	{
		title: "Proteção de Luz Azul",
		description: "Lentes anti-reflexo e resistentes a arranhões que protegem contra raios UV com tratamento especial que ajuda a bloquear a luz azul potencialmente incômoda que ocorre natural e digitalmente"
	},
	{
		title: "Clássica",
		description: "Grau -3.00 à +3.00. Lentes clássicas em resina. Resistentes a impactos e indicadas para graus entre -3.00 e +3.00."
	},
	{
		title: "Fina",
		description: "Grau -5.00 à +5.00. Lentes finas em policarbonato. Mais leves, resistentes e indicadas para graus entre -5.00 e +5.00."
	},
	{
		title: "Ultra Fina",
		description: "Grau -6.00 à +6.00. Lentes ultra finas com tecnologia alto índice. Precisão, leveza e elegância. São indicadas para graus acima de -6.00 e +6.00."
	}
]
// Fecha a personalização ao clicar fora dela
document.addEventListener('click', function(e) {
	if (
		document.body.classList.contains('personalize-product__visible') &&
		!e.target.closest('.personalize-product')
	) {
		document.body.classList.remove('personalize-product__visible');
	}
});
// Função para exibir a personalização ao clicar no botão de compra
function setupPersonalizeProductTrigger() {
    // Remove o listener antigo se existir para evitar duplicatas
    document.removeEventListener('click', handleBuyButtonClick);
    
    // Usa event delegation para capturar cliques no botão de compra
    document.addEventListener('click', handleBuyButtonClick);
}

function handleBuyButtonClick(e) {
    // Verifica se o clique foi no botão de compra
    if (e.target.closest('.product-info-content .product-action-buy')) {
        const personalize = document.querySelector('.personalize-product');
        const buyBtn = e.target.closest('.product-action-buy');
        
        if (personalize && buyBtn) {
            console.log(`ouytch2`);
            e.preventDefault();
            e.stopPropagation();
            document.body.classList.add('personalize-product__visible');
        }
    }
}
// Função de inicialização da personalização
// function personalizeInit() {
	
// 	const content = document.querySelector('.personalize-product__content');
// 	if (!content) return;

// 	// Remove review antigo se houver
// 	let oldReview = content.querySelector('.personalize-product__review');
// 	if (oldReview) oldReview.remove();

// 	// Cria review
// 	const reviewDiv = document.createElement('div');
// 	reviewDiv.className = 'personalize-product__review';
// 	content.appendChild(reviewDiv);

//   const groups = [...content.querySelectorAll('.personalize-product__group')];
//   const review = content.querySelector('.personalize-product__review');
//   const allSteps = [...groups, review];

//   // --- Adiciona .personalize-product__actions com preço e botão dinâmico ---
// 	const mainProduct = document.querySelector('.personalize-product');
// 	if (mainProduct && !mainProduct.querySelector('.personalize-product__actions')) {
// 		const actionsDiv = document.createElement('div');
// 		actionsDiv.className = 'personalize-product__actions';
// 		// Linha de preço
// 		const priceLine = document.createElement('div');
		
// 		const priceLabel = document.createElement('span');
// 		priceLabel.textContent = 'PREÇO';
// 		const priceValue = document.createElement('b');
// 		const priceEl = document.querySelector('.product-action-price .product-price-final .total');
// 		priceValue.textContent = priceEl ? priceEl.textContent.trim() : '--';
// 		priceLine.appendChild(priceLabel);
// 		priceLine.appendChild(priceValue);
// 		actionsDiv.appendChild(priceLine);
// 		// Botão de ação
// 		const actionBtn = document.createElement('button');
// 		actionBtn.type = 'button';
// 		actionBtn.className = 'personalize-action-btn';
// 		actionsDiv.appendChild(actionBtn);
// 		mainProduct.appendChild(actionsDiv);
// 	}

// 	// Função para atualizar o botão de ação conforme o passo
// 	function updateActionBtn(currentStepIdx) {
// 		console.log(`baaa`)
// 		const actionsDiv = document.querySelector('.personalize-product__actions');
// 		if (!actionsDiv) return;
// 		const actionBtn = actionsDiv.querySelector('.personalize-action-btn');
// 		if (!actionBtn) return;
// 		// Atualiza preço
// 		const priceValue = actionsDiv.querySelector('div > b');
// 		const priceEl = document.querySelector('.product-info-content .product-action .product-action-price .product-price-final .total');
// 		console.log(priceEl, priceValue)
// 		if (priceValue && priceEl) priceValue.textContent = priceEl.textContent.trim();
// 		// Define texto e comportamento
// 		if (currentStepIdx < groups.length - 1) {
// 			actionBtn.textContent = 'AVANÇAR';
// 			actionBtn.onclick = function () {
// 				allSteps.forEach(s => s.classList.remove('active'));
// 				allSteps[currentStepIdx + 1].classList.add('active');
// 				updateActionBtn(currentStepIdx + 1);
// 			};
// 		} else if (currentStepIdx === groups.length - 1) {
// 			actionBtn.textContent = 'AVANÇAR';
// 			actionBtn.onclick = function () {
// 				allSteps.forEach(s => s.classList.remove('active'));
// 				review.classList.add('active');
// 				updateActionBtn(groups.length); // resume
// 			};
// 		} else {
// 			actionBtn.textContent = 'ADICIONAR AO CARRINHO';
// 			actionBtn.onclick = function () {
// 				// Aqui você pode disparar o submit do form ou outra ação
// 				const form = document.querySelector('.product-info-content form[name="form_add_cart"]');
// 				if (form) form.submit();
// 			};
// 		}
// 	}

// 	// Inicializa: mostra o primeiro grupo e atualiza o botão
// 	let activeIdx = allSteps.findIndex(s => s.classList.contains('active'));
// 	if (activeIdx === -1) {
// 		allSteps.forEach(s => s.classList.remove('active'));
// 		allSteps[0].classList.add('active');
// 		activeIdx = 0;
// 	}
// 	updateActionBtn(activeIdx);

// 	// Sempre que um grupo/review for ativado, atualiza o botão de ação
// 	allSteps.forEach((step, idx) => {
// 		if (!step) return;
// 		const observer = new MutationObserver(() => {
// 			if (step.classList.contains('active')) updateActionBtn(idx);
// 		});
// 		observer.observe(step, { attributes: true, attributeFilter: ['class'] });
// 	});
  
//   // Customiza o grupo RECEITA OFTALMICA
//   groups.forEach(group => {
//     const label = group.querySelector('.personalize-product__label');
//     if (label && label.textContent.trim().toLowerCase().includes('receita oftálmica')) {
//       group.classList.add('personalize-product__receita');
//       const customHtml = `
//         <img src="https://cdn.dooca.store/181370/files/frame-86.svg?v=1757717693" alt="Receita"/><div class="personalize-product__label-heading">VOCÊ TEM UMA RECEITA?</div>
//         <p>Tire uma foto da sua receita ou envie um arquivo do seu computador/celular.</p>
//         <label class="enviar-receita-btn">
//           <input type="file" accept="image/*,.pdf" style="display:none" id="input-receita-oftalmica">
//           <span>
//             <i class="icon-arquivo"><img src="https://cdn.dooca.store/181370/files/frame-88.svg?v=1757717828"/></i>
//             ENVIAR MINHA RECEITA
//           </span>
//         </label>
//         <div class="receita-ou">
//           <strong>Não tem uma receita válida?</strong>
//           <p>Aperte aqui e agende um exame de vista em um de nossos laboratórios</p>
//           <a href="#" class="agendar-exame-link">AGENDAR EXAME DE VISTA</a>
//         </div>
//       `;
//       // Adiciona o HTML customizado após o label original
//       label.insertAdjacentHTML('afterend', customHtml);

// 			const receitaInput = group.querySelector('#input-receita-oftalmica');
// 			if (receitaInput) {
// 				receitaInput.addEventListener('change', function (e) {
// 					const file = receitaInput.files[0];
// 					if (!file) return;

// 					const formData = new FormData();
// 					formData.append('file', file);

// 					fetch('https://n8n.alpix.dev/webhook/upload-arquivo', {
// 						method: 'POST',
// 						body: formData
// 					})
// 						.then(response => response.json())
// 						.then(data => {
// 							console.log('Arquivo enviado com sucesso:', data);
// 							// Aqui você pode mostrar um feedback ao usuário, se desejar
// 							const receitaInputText = group.querySelector('input[placeholder="Receita Oftálmica"]');
// 							if (receitaInputText) {
// 								receitaInputText.value = data.fileUrl;
// 								receitaInputText.dispatchEvent(new Event('input', { bubbles: true }));
// 							}

// 							// Remove prévia anterior se existir
// 							let preview = group.querySelector('.receita-thumbnail-preview');
// 							if (preview) preview.remove();

// 							// Adiciona prévia do arquivo abaixo do botão
// 							const btn = group.querySelector('.enviar-receita-btn');
// 							if (btn && data.thumbnailUrl) {
// 								preview = document.createElement('div');
// 								preview.className = 'receita-thumbnail-preview';
// 								preview.innerHTML = `<img src="${data.thumbnailUrl}" alt="Prévia da receita" style="max-width:120px;max-height:120px;margin-top:8px;border-radius:8px;">`;
// 								btn.insertAdjacentElement('afterend', preview);
// 							}
// 						})
// 						.catch(error => {
// 							console.error('Erro ao enviar arquivo:', error);
// 							// Aqui você pode mostrar um feedback de erro ao usuário, se desejar
// 						});
// 				});
// 			}
//     }
//   });

//   allSteps.forEach((step, idx) => {
//     if (!step) return;
//     const label = step.querySelector('.personalize-product__label');
//     // Só não adiciona o botão no primeiro grupo
//     if (
//       (step === groups[0] && step !== review) ||
//       !label ||
//       label.querySelector('.personalize-back-btn')
//     ) return;

//     const backBtn = document.createElement('button');
//     backBtn.type = 'button';
//     backBtn.className = 'personalize-back-btn';
//     backBtn.innerHTML = '<i><img src="https://cdn.dooca.store/181370/files/frame-85.svg?v=1757703290" alt="Voltar"/></i>';
//     backBtn.onclick = function () {
//       allSteps.forEach(s => s.classList.remove('active'));
//       // Se for o review, volta para o último grupo
//       if (step === review) {
//         groups[groups.length - 1].classList.add('active');
//       } else {
//         allSteps[idx - 1].classList.add('active');
//       }
//     };
//     label.prepend(backBtn);
//   });

// 	// Função para atualizar o review e ocultar labels de radios vazios
// 	function updateReview() {
		
// 		let html = '<div class="personalize-product__label"><button type="button" class="personalize-back-btn"><i><img src="https://cdn.dooca.store/181370/files/frame-85.svg?v=1757703290" alt="Voltar"></i></button> Confira sua seleção</div><ul>';
// 		groups.forEach((group, idx) => {
// 			const label = group.querySelector('.personalize-product__label')?.textContent.trim() || '';
// 			let value = '';
// 			// Radios
// 			const radios = group.querySelectorAll('input[type="radio"]');
// 			if (radios.length) {
// 				const checked = group.querySelector('input[type="radio"]:checked');
// 				value = checked ? checked.parentElement.textContent.trim() : '';
// 			} else {
// 				// Textos
// 				const input = group.querySelector('input[type="text"], input:not([type])');
// 				value = input ? input.value : '';
// 			}
// 			html += `<li><strong>${label}:</strong> ${value || '<em>Não selecionado</em>'}</li>`;

// 			// Oculta labels de inputs vazios dentro de .radio-group
// 			const radioGroups = group.querySelectorAll('.radio-group');
// 			radioGroups.forEach(radioGroup => {
// 				const radioInputs = radioGroup.querySelectorAll('input[type="radio"]');
// 				radioInputs.forEach(input => {
// 					const label = input.closest('label');
// 					if (!label) return;
// 					if (input.value === '') {
// 						label.style.display = 'none';
// 					} else {
// 						label.style.display = '';
// 					}
// 				});
// 			});
// 		});
// 		html += '</ul>';
// 				reviewDiv.innerHTML = html;

// 				// Adiciona o event listener ao botão VOLTAR do review
// 				const backBtn = reviewDiv.querySelector('.personalize-back-btn');
// 				if (backBtn) {
// 						backBtn.onclick = function () {
// 								allSteps.forEach(s => s.classList.remove('active'));
// 								groups[groups.length - 1].classList.add('active');
// 								if (typeof updateActionBtn === 'function') {
// 									updateActionBtn(groups.length - 1);
// 								}
// 						};
// 				}
// 	}

// 	// Adiciona listeners para atualizar o review
	
// 	groups.forEach(group => {
// 		const inputs = group.querySelectorAll('input');
// 		inputs.forEach(input => {
// 			input.removeEventListener('change', updateReview); // Evita múltiplos listeners
// 			input.addEventListener('change', updateReview);
// 		});
// 	});

// 	// Atualiza inicialmente
// 	updateReview();
// }

// ...existing code...

// Função de inicialização da personalização
function personalizeInit() {
    
    const content = document.querySelector('.personalize-product__content');
    if (!content) return;

    // Remove review antigo se houver
    let oldReview = content.querySelector('.personalize-product__review');
    if (oldReview) oldReview.remove();

    // Cria review
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'personalize-product__review';
    content.appendChild(reviewDiv);

  const groups = [...content.querySelectorAll('.personalize-product__group')];
  const review = content.querySelector('.personalize-product__review');
  const allSteps = [...groups, review];

    // Sistema de persistência do estado de navegação
    const STORAGE_KEY = 'personalize_current_step';
    
    function saveCurrentStep(stepIndex) {
        try {
            sessionStorage.setItem(STORAGE_KEY, stepIndex.toString());
        } catch (error) {
            console.warn('Erro ao salvar estado da navegação:', error);
        }
    }
    
    function loadCurrentStep() {
        try {
            const saved = sessionStorage.getItem(STORAGE_KEY);
            return saved ? parseInt(saved) : 0;
        } catch (error) {
            console.warn('Erro ao carregar estado da navegação:', error);
            return 0;
        }
    }
    
    function clearCurrentStep() {
        try {
            sessionStorage.removeItem(STORAGE_KEY);
        } catch (error) {
            console.warn('Erro ao limpar estado da navegação:', error);
        }
    }

  // --- Adiciona .personalize-product__actions com preço e botão dinâmico ---
    const mainProduct = document.querySelector('.personalize-product');
    if (mainProduct && !mainProduct.querySelector('.personalize-product__actions')) {
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'personalize-product__actions';
        // Linha de preço
        const priceLine = document.createElement('div');
        
        const priceLabel = document.createElement('span');
        priceLabel.textContent = 'PREÇO';
        const priceValue = document.createElement('b');
        const priceEl = document.querySelector('.product-action-price .product-price-final .total');
        priceValue.textContent = priceEl ? priceEl.textContent.trim() : '--';
        priceLine.appendChild(priceLabel);
        priceLine.appendChild(priceValue);
        actionsDiv.appendChild(priceLine);
        // Botão de ação
        const actionBtn = document.createElement('button');
        actionBtn.type = 'button';
        actionBtn.className = 'personalize-action-btn';
        actionsDiv.appendChild(actionBtn);
        mainProduct.appendChild(actionsDiv);
    }

    // Função para atualizar o botão de ação conforme o passo
    function updateActionBtn(currentStepIdx) {
        const actionsDiv = document.querySelector('.personalize-product__actions');
        if (!actionsDiv) return;
        const actionBtn = actionsDiv.querySelector('.personalize-action-btn');
        if (!actionBtn) return;
        
        // Salva o estado atual
        saveCurrentStep(currentStepIdx);
        
        // Atualiza preço
        const priceValue = actionsDiv.querySelector('div > b');
        const priceEl = document.querySelector('.product-info-content .product-action .product-action-price .product-price-final .total');
        if (priceValue && priceEl) priceValue.textContent = priceEl.textContent.trim();
        
        // Define texto e comportamento
        if (currentStepIdx < groups.length - 1) {
            actionBtn.textContent = 'AVANÇAR';
            actionBtn.onclick = function () {
                allSteps.forEach(s => s.classList.remove('active'));
                
                // Encontra o próximo passo visível
                const nextVisibleStep = findNextVisibleStep(currentStepIdx);
                if (nextVisibleStep) {
                    nextVisibleStep.classList.add('active');
                    const nextStepIdx = allSteps.indexOf(nextVisibleStep);
                    updateActionBtn(nextStepIdx);
                }
            };
						actionBtn.classList.remove('add-btn');
        } else if (currentStepIdx === groups.length - 1) {
            actionBtn.textContent = 'AVANÇAR';
            actionBtn.onclick = function () {
                allSteps.forEach(s => s.classList.remove('active'));
                review.classList.add('active');
                updateActionBtn(groups.length); // resume
            };
						actionBtn.classList.remove('add-btn');
        } else {
            actionBtn.textContent = 'ADICIONAR AO CARRINHO';
						actionBtn.classList.add('add-btn');
            actionBtn.onclick = function () {
                // Limpa o estado salvo quando finaliza a compra
                clearCurrentStep();
                
                // Adiciona loading ao botão
                const originalText = actionBtn.textContent;
                actionBtn.textContent = 'ADICIONANDO...';
                actionBtn.disabled = true;
                localStorage.removeItem(`${window.dooca.product.variation.grid_id}`);
                // Faz o submit via AJAX
                const form = document.querySelector('.product-info-content form[name="form_add_cart"]');
                if (form) {
                    const formData = new FormData(form);
                    
                    fetch(form.action || window.location.href, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest'
                        }
                    })
                    .then(response => {
                        if (response.ok) {
                            // Produto adicionado com sucesso, redireciona para o carrinho
                            console.log('Produto adicionado ao carrinho com sucesso');
                            window.location.href = '/carrinho';
                        } else {
                            throw new Error('Erro ao adicionar produto ao carrinho');
                        }
                    })
                    .catch(error => {
                        console.error('Erro:', error);
                        alert('Erro ao adicionar produto ao carrinho. Tente novamente.');
                        
                        // Restaura o botão em caso de erro
                        actionBtn.textContent = originalText;
                        actionBtn.disabled = false;
                    });
                } else {
                    // Fallback caso não encontre o form
                    console.warn('Formulário não encontrado, usando método tradicional');
                    actionBtn.textContent = originalText;
                    actionBtn.disabled = false;
                }
            };
        }
    }

    // Restaura o estado salvo ou inicia no primeiro grupo
    const savedStepIndex = loadCurrentStep();
    let activeIdx = savedStepIndex;
    
    // Verifica se o índice salvo é válido
    if (activeIdx < 0 || activeIdx >= allSteps.length) {
        activeIdx = 0;
    }
    
    // Aplica o estado correto
    allSteps.forEach(s => s.classList.remove('active'));
    if (allSteps[activeIdx]) {
        allSteps[activeIdx].classList.add('active');
    }
    
    updateActionBtn(activeIdx);

    // Sempre que um grupo/review for ativado, atualiza o botão de ação
    allSteps.forEach((step, idx) => {
        if (!step) return;
        const observer = new MutationObserver(() => {
            if (step.classList.contains('active')) {
                updateActionBtn(idx);
            }
        });
        observer.observe(step, { attributes: true, attributeFilter: ['class'] });
    });

  
    // Função para gerar mensagem do WhatsApp com informações do pedido
    function generateWhatsAppMessage() {
        let message = `Olá! Preciso enviar minha receita oftálmica para o pedido.\n\n`;
        
        // Adiciona nome do produto
        if (window.dooca && window.dooca.product && window.dooca.product.name) {
            message += `*Produto:* ${window.dooca.product.name}\n\n`;
        }
        
        // Adiciona customizações selecionadas
        message += `*Customizações selecionadas:*\n`;
        
        groups.forEach(group => {
            const labelEl = group.querySelector('.personalize-product__label');
            if (!labelEl) return;
            
            const stepTitle = labelEl.textContent.trim();
            let value = '';
            
            // Verifica radios
            const radios = group.querySelectorAll('input[type="radio"]');
            if (radios.length) {
                const checked = group.querySelector('input[type="radio"]:checked');
                if (checked) {
                    const parentLabel = checked.parentElement;
                    // Clone o label para manipular sem afetar o DOM
                    const labelClone = parentLabel.cloneNode(true);
                    // Remove elementos small (descrições) do clone
                    const smallElements = labelClone.querySelectorAll('small');
                    smallElements.forEach(small => small.remove());
                    // Pega apenas o texto, sem as descrições
                    value = labelClone.textContent.trim();
                }
            } else {
                // Verifica inputs de texto
                const input = group.querySelector('input[type="text"].personalize-input');
                value = input ? input.value : '';
            }
            
            // Adiciona à mensagem se tiver valor
            if (value && value.length > 0) {
                // Para receita oftálmica, não inclui o link, apenas indica que será enviada
                if (stepTitle.toLowerCase().includes('receita oftálmica')) {
                    message += `\n• ${stepTitle}: Será enviada via WhatsApp\n`;
                } else {
                    message += `• ${stepTitle}: ${value}\n`;
                }
            }
        });
        
        message += `\nPoderia me ajudar com o envio da receita? Obrigado!`;
        
        return encodeURIComponent(message);
    }

	  // Customiza o grupo RECEITA OFTALMICA
  groups.forEach(group => {
    const label = group.querySelector('.personalize-product__label');
    if (label && label.textContent.trim().toLowerCase().includes('receita oftálmica')) {
      group.classList.add('personalize-product__receita');
      
      // Gera a mensagem do WhatsApp dinamicamente
      const whatsappMessage = generateWhatsAppMessage();
      const whatsappBaseUrl = $(`.footer-contact .whatsapp`).closest(`a`).attr(`href`) || 'https://wa.me/5511999999999';
			//const whatsappBaseUrl = 'https://api.whatsapp.com/send?l=pt_br&phone=5511993243185';
      
      const customHtml = `
        <img src="https://cdn.dooca.store/181370/files/frame-86.svg?v=1757717693" alt="Receita"/><div class="personalize-product__label-heading">VOCÊ TEM UMA RECEITA?</div>
        <p>Tire uma foto da sua receita ou envie um arquivo do seu computador/celular.</p>
        <label class="enviar-receita-btn">
          <input type="file" accept="image/*,.pdf" style="display:none" id="input-receita-oftalmica">
          <span>
            <i class="icon-arquivo"><img src="https://cdn.dooca.store/181370/files/frame-88.svg?v=1757717828"/></i>
            Enviar Foto ou Arquivo
          </span>
        </label>
				${localStorage.getItem(`${window.dooca.product.variation.grid_id}_personalize_receita_thumbnail`) || ''}
        <div class="receita-ou">
          <strong class="or">ou</strong>
          
          <a href="${whatsappBaseUrl}&text=${whatsappMessage}" target="_blank" class="receita-whatsapp-btn" id="whatsapp-receita-btn"><i class="icon-whatsapp"></i> ENVIAR POR WHATSAPP</a><strong class="or">ou</strong>
          <button type="button" class="receita-enviar-depois-btn">ENVIAR DEPOIS</button>
        </div>
      `;
      // Adiciona o HTML customizado após o label original
      label.insertAdjacentHTML('afterend', customHtml);

			const receitaInput = group.querySelector('#input-receita-oftalmica');
			if (receitaInput) {
				receitaInput.addEventListener('change', function (e) {
						const file = receitaInput.files[0];
						if (!file) return;

						// Adiciona o loader
						let loader = group.querySelector('.product-attribute-loader');
						if (!loader) {
								loader = document.createElement('div');
								loader.className = 'product-attribute-loader';
								loader.style.display = 'block';
								loader.innerHTML = '<span class="loader"></span>';
								
								// Insere o loader após o botão de envio
								const btn = group.querySelector('.enviar-receita-btn');
								if (btn) {
										btn.insertAdjacentElement('afterend', loader);
								}
						} else {
								loader.style.display = 'block';
						}

						const formData = new FormData();
						formData.append('file', file);

						fetch('https://n8n.alpix.dev/webhook/upload-arquivo', {
								method: 'POST',
								body: formData
						})
								.then(response => response.json())
								.then(data => {
										console.log('Arquivo enviado com sucesso:', data);
										
										// Remove o loader
										if (loader) {
												loader.style.display = 'none';
										}
										
										// Aqui você pode mostrar um feedback ao usuário, se desejar
										const receitaInputText = group.querySelector('.personalize-input');
										if (receitaInputText) {
												receitaInputText.value = data.fileUrl;
												receitaInputText.dispatchEvent(new Event('change', { bubbles: true }));
										}

										// Remove prévia anterior se existir
										let preview = group.querySelector('.receita-thumbnail-preview');
										if (preview) preview.remove();

										// Adiciona prévia do arquivo abaixo do loader
										if (data.thumbnailUrl) {
												preview = document.createElement('div');
												preview.className = 'receita-thumbnail-preview';
												
												// Verifica se é uma imagem ou outro tipo de arquivo
												const isImage = data.thumbnailUrl.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)(\?|$)/i);
												
												if (isImage) {
														// Se for imagem, exibe a thumbnail
														preview.innerHTML = `
															<img src="${data.thumbnailUrl}" alt="Prévia da receita" style="max-width:120px;max-height:120px;margin-top:8px;border-radius:8px;">
															<button type="button" class="remover-arquivo-btn" title="Remover arquivo">×</button>
														`;
												} else {
														// Se não for imagem, exibe ícone de PDF/arquivo
														preview.innerHTML = `
															<img src="https://cdn.dooca.store/181370/files/pdf-file-iconsvg.png?v=1759358786" alt="Arquivo PDF" style="max-width:120px;max-height:120px;margin-top:8px;border-radius:8px;">
															<button type="button" class="remover-arquivo-btn" title="Remover arquivo">×</button>
														`;
												}
												
												localStorage.setItem(`${window.dooca.product.variation.grid_id}_personalize_receita_thumbnail`, preview.outerHTML);
												
												updateReview();
												// Insere após o loader (que agora está oculto)
												if (loader) {
														loader.insertAdjacentElement('afterend', preview);
												} else {
														const btn = group.querySelector('.enviar-receita-btn');
														if (btn) {
																btn.insertAdjacentElement('afterend', preview);
														}
												}
												
												// Adiciona listener para o botão de remover
												const removerBtn = preview.querySelector('.remover-arquivo-btn');
												if (removerBtn) {
														removerBtn.addEventListener('click', function(e) {
																// Previne o comportamento padrão e para a propagação do evento
																e.preventDefault();
																e.stopPropagation();
																
																// Remove a prévia
																preview.remove();
																
																// Limpa o input de arquivo
																const receitaInputFile = group.querySelector('#input-receita-oftalmica');
																if (receitaInputFile) {
																		receitaInputFile.value = '';
																}
																
																// Limpa o input text que recebe o link
																const receitaInputText = group.querySelector('.personalize-input');
																if (receitaInputText) {
																		receitaInputText.value = '';
																		receitaInputText.dispatchEvent(new Event('change', { bubbles: true }));
																}
																
																// Remove do localStorage
																if (window.dooca && window.dooca.product && window.dooca.product.variation) {
																		const storageKey = `${window.dooca.product.variation.grid_id}_personalize_receita_thumbnail`;
																		localStorage.removeItem(storageKey);
																}
																
																// Remove o botão de prosseguir se existir
																const prosseguirBtn = group.querySelector('.prosseguir-arquivo-btn');
																if (prosseguirBtn) {
																		prosseguirBtn.remove();
																}
																
																// Atualiza o review
																updateReview();
														});
												}
												
												// Adiciona botão "Prosseguir com este arquivo/foto"
												let prosseguirBtn = group.querySelector('.prosseguir-arquivo-btn');
												if (!prosseguirBtn) {
														prosseguirBtn = document.createElement('button');
														prosseguirBtn.type = 'button';
														prosseguirBtn.className = 'prosseguir-arquivo-btn';
														prosseguirBtn.textContent = 'PROSSEGUIR COM ESTE ARQUIVO/FOTO';
														
														// Adiciona ação de avançar
														prosseguirBtn.onclick = function() {
																const currentStepIdx = allSteps.findIndex(step => step.classList.contains('active'));
																
																// Remove a classe active do passo atual
																allSteps.forEach(s => s.classList.remove('active'));
																
																// Encontra o próximo passo visível
																const nextVisibleStep = findNextVisibleStep(currentStepIdx);
																if (nextVisibleStep) {
																		nextVisibleStep.classList.add('active');
																		const nextStepIdx = allSteps.indexOf(nextVisibleStep);
																		updateActionBtn(nextStepIdx);
																}
														};
														
														// Insere após a prévia
														preview.insertAdjacentElement('afterend', prosseguirBtn);
												}
										}
								})
								.catch(error => {
										console.error('Erro ao enviar arquivo:', error);
										
										// Remove o loader mesmo em caso de erro
										if (loader) {
												loader.style.display = 'none';
										}
										
										// Aqui você pode mostrar um feedback de erro ao usuário, se desejar
										alert('Erro ao enviar arquivo. Tente novamente.');
								});
				});


			}
    }
  });
  
  // Adiciona listeners para os botões de receita
  groups.forEach(group => {
    // Botão "Enviar Depois"
    const enviarDepoisBtn = group.querySelector('.receita-enviar-depois-btn');
    if (enviarDepoisBtn) {
      enviarDepoisBtn.addEventListener('click', function() {
        const currentStepIdx = allSteps.findIndex(step => step.classList.contains('active'));
        
        // Remove a classe active do passo atual
        allSteps.forEach(s => s.classList.remove('active'));
        
        // Encontra o próximo passo visível
        const nextVisibleStep = findNextVisibleStep(currentStepIdx);
        if (nextVisibleStep) {
          nextVisibleStep.classList.add('active');
          const nextStepIdx = allSteps.indexOf(nextVisibleStep);
          updateActionBtn(nextStepIdx);
        }
      });
    }
  });
  
  allSteps.forEach((step, idx) => {
    if (!step) return;
    const label = step.querySelector('.personalize-product__label');
    // Só não adiciona o botão no primeiro grupo
    if (
      (step === groups[0] && step !== review) ||
      !label ||
      label.querySelector('.personalize-back-btn')
    ) return;

    const backBtn = document.createElement('button');
    backBtn.type = 'button';
    backBtn.className = 'personalize-back-btn';
    backBtn.innerHTML = '<i><img src="https://cdn.dooca.store/181370/files/frame-85.svg?v=1757703290" alt="Voltar"/></i>';
    backBtn.onclick = function () {
      // Limpa o step atual antes de voltar
      if (step !== review) {
        clearStepInputs(step);
				
      }
      
      allSteps.forEach(s => s.classList.remove('active'));
      // Se for o review, volta para o último grupo visível
      if (step === review) {
        // Encontra o último grupo visível
        for (let i = groups.length - 1; i >= 0; i--) {
          const group = groups[i];
          if (group && !group.classList.contains('step-hidden') && group.style.display !== 'none') {
            group.classList.add('active');
						clearStepInputs(group);
            updateActionBtn(i);
            break;
          }
        }
      } else {
        // Encontra o passo anterior visível
        const previousStep = findPreviousVisibleStep(idx);
        if (previousStep) {
          previousStep.classList.add('active');
					clearStepInputs(previousStep);
          const prevStepIdx = allSteps.indexOf(previousStep);
          updateActionBtn(prevStepIdx);
        }
      }
    };
    label.prepend(backBtn);
  });

    // Função para atualizar o review e ocultar labels de radios vazios
    function updateReview() {
				let html = '<div class="personalize-product__label"><button type="button" class="personalize-back-btn"><i><img src="https://cdn.dooca.store/181370/files/frame-85.svg?v=1757703290" alt="Voltar"></i></button> Confira sua seleção</div><ul>';
        groups.forEach((group, idx) => {
            const label = group.querySelector('.personalize-product__label')?.textContent.trim() || '';
            let value = '';
            // Radios
						const radios = group.querySelectorAll('input[type="radio"]');
            if (radios.length) {
                const checked = group.querySelector('input[type="radio"]:checked');
                if (checked) {
                    const parentLabel = checked.parentElement;
                    // Clone o label para manipular sem afetar o DOM
                    const labelClone = parentLabel.cloneNode(true);
                    // Remove elementos small (descrições) do clone
                    const smallElements = labelClone.querySelectorAll('small');
                    smallElements.forEach(small => small.remove());
                    // Pega apenas o texto, sem as descrições
                    value = labelClone.textContent.trim();
                } else {
                    value = '';
                }
								console.log(`xd`,label, value);
            } else {
                // Textos
                const input = group.querySelector('input[type="text"].personalize-input');
                value = input ? input.value : '';
            }
						console.log(value, value.length, label)
						if(value.length != 0) {
							if(label.toLowerCase().includes('receita oftálmica') && value && (value.startsWith('http') || value.startsWith('www'))) {
								value = `<a href="${value}" target="_blank" rel="noopener noreferrer">${localStorage.getItem(`${window.dooca.product.variation.grid_id}_personalize_receita_thumbnail`) || ''}</a>`;
							}
							
            	html += `<li><strong>${label}:</strong> ${value || '<em>Não selecionado</em>'}</li>`;
						}
            // Oculta labels de inputs vazios dentro de .radio-group
            const radioGroups = group.querySelectorAll('.radio-group');
            radioGroups.forEach(radioGroup => {
                const radioInputs = radioGroup.querySelectorAll('input[type="radio"]');
                radioInputs.forEach(input => {
                    const label = input.closest('label');
                    if (!label) return;
                    if (input.value === '') {
                        label.style.display = 'none';
                    } else {
                        label.style.display = '';
                    }
                });
            });
        });
        html += '</ul>';
        reviewDiv.innerHTML = html;

        // Adiciona o event listener ao botão VOLTAR do review
        const backBtn = reviewDiv.querySelector('.personalize-back-btn');
        if (backBtn) {
            backBtn.onclick = function () {
                allSteps.forEach(s => s.classList.remove('active'));
                // Encontra o último grupo visível (review não limpa dados, apenas navega)
                for (let i = groups.length - 1; i >= 0; i--) {
                  const group = groups[i];
                  if (group && !group.classList.contains('step-hidden') && group.style.display !== 'none') {
                    group.classList.add('active');
                    updateActionBtn(i);
                    break;
                  }
                }
            };
        }
    }

    // Sistema de exibição condicional baseado em window.customizationStepsConfig
    function checkStepConditions(stepConfig, selectedValues) {
        if (!stepConfig.showStepWhen || !Array.isArray(stepConfig.showStepWhen)) {
            return true; // Se não tem condições, sempre exibe
        }
        
        return stepConfig.showStepWhen.every(condition => {
            const selectedValue = selectedValues[condition.title];
            
            if (!selectedValue) {
                return false; // Se não tem valor selecionado, não exibe
            }
            
            switch (condition.is) {
                case '=':
                    return selectedValue === condition.value;
                case '!=':
                    return selectedValue !== condition.value;
                default:
                    return true;
            }
        });
    }
    
    function getSelectedValues() {
        const values = {};
        
        groups.forEach(group => {
            const labelEl = group.querySelector('.personalize-product__label');
            if (!labelEl) return;
            
            const stepTitle = labelEl.textContent.trim();
            
            // Verifica radios
            const checkedRadio = group.querySelector('input[type="radio"]:checked');
            if (checkedRadio) {
                const labelText = checkedRadio.closest('label')?.textContent.trim();
                if (labelText) {
                    values[stepTitle] = labelText;
                }
            }
            
            // Verifica inputs de texto
            const textInput = group.querySelector('input[type="text"].personalize-input');
            if (textInput && textInput.value.trim()) {
                values[stepTitle] = textInput.value.trim();
            }
        });
        
        return values;
    }
    
    function clearStepInputs(group) {
			console.log(`group`, group)
        let hasChanges = false;
        
        // Limpa inputs de texto apenas se tiverem valor
        const textInputs = group.querySelectorAll('input[type="text"], input:not([type]), textarea');
        textInputs.forEach(input => {
            if (input.value && input.value.length > 0) {
                input.value = '';
                hasChanges = true;
            }
        });
        
        // Desmarca radio buttons apenas se estiverem marcados
        const radioInputs = group.querySelectorAll('input[type="radio"]');
        radioInputs.forEach(input => {
            if (input.checked) {
                input.checked = false;
                hasChanges = true;
            }
        });
        
        // Desmarca checkboxes apenas se estiverem marcados
        const checkboxInputs = group.querySelectorAll('input[type="checkbox"]');
        checkboxInputs.forEach(input => {
            if (input.checked) {
                input.checked = false;
                hasChanges = true;
            }
        });
        
        // Limpa selects apenas se não estiverem na primeira opção
        const selectInputs = group.querySelectorAll('select');
        selectInputs.forEach(select => {
            if (select.selectedIndex > 0) {
                select.selectedIndex = 0;
                hasChanges = true;
            }
        });
        
        // Remove preview de receita se existir
        const receitaPreview = group.querySelector('.receita-thumbnail-preview');
        if (receitaPreview) {
            receitaPreview.remove();
            hasChanges = true;
        }
        
        // Remove botão de prosseguir se existir
        const prosseguirBtn = group.querySelector('.prosseguir-arquivo-btn');
        if (prosseguirBtn) {
            prosseguirBtn.remove();
            hasChanges = true;
        }
        
        // Limpa o localStorage da receita se for o step de receita
        const label = group.querySelector('.personalize-product__label');
        if (label && label.textContent.trim().toLowerCase().includes('receita oftálmica')) {
            if (window.dooca && window.dooca.product && window.dooca.product.variation) {
                const storageKey = `${window.dooca.product.variation.grid_id}_personalize_receita_thumbnail`;
                if (localStorage.getItem(storageKey)) {
                    localStorage.removeItem(storageKey);
                    hasChanges = true;
                }
            }
        }
        
        // Limpa dados do localStorage de customização para inputs deste grupo
        clearCustomizationStorageForGroup(group);
        
        // Se houve mudanças, atualiza o review
        if (hasChanges && typeof updateReview === 'function') {
            updateReview();
        }
    }
    
    function clearCustomizationStorageForGroup(group) {
        if (!window.dooca || !window.dooca.product || !window.dooca.product.variation) {
            return;
        }
        
        const storageKey = window.dooca.product.variation.grid_id;
        const stored = localStorage.getItem(storageKey);
        
        if (!stored) return;
        
        try {
            let customizationData = JSON.parse(stored);
            
            if (!Array.isArray(customizationData)) return;
            
            // Encontra todos os inputs deste grupo que têm name com padrão customize[content][X][value]
            const inputs = group.querySelectorAll('input[name*="customize[content]"], select[name*="customize[content]"], textarea[name*="customize[content]"]');
            
            inputs.forEach(input => {
                const inputName = input.name;
                if (inputName) {
                    // Remove itens do localStorage que correspondem a este input
                    customizationData = customizationData.filter(item => item.id !== inputName);
                }
            });
            
            // Atualiza o localStorage com os dados filtrados
            if (customizationData.length > 0) {
                localStorage.setItem(storageKey, JSON.stringify(customizationData));
            } else {
                localStorage.removeItem(storageKey);
            }
            
        } catch (error) {
            console.warn('Erro ao limpar dados de customização do localStorage:', error);
        }
    }
    
    // Flag para evitar loops infinitos
    let isApplyingVisibility = false;
    
    function applyStepVisibility() {
        if (isApplyingVisibility) {
            return; // Evita loop infinito
        }
        
        if (!window.customizationStepsConfig || !Array.isArray(window.customizationStepsConfig)) {
            return; // Se não tem configuração, não aplica nenhuma regra
        }
        
        isApplyingVisibility = true;
        
        try {
            const selectedValues = getSelectedValues();
            
            groups.forEach(group => {
                const labelEl = group.querySelector('.personalize-product__label');
                if (!labelEl) return;
                
                const stepTitle = labelEl.textContent.trim();
                
                // Encontra a configuração para este passo
                const stepConfig = window.customizationStepsConfig.find(config => 
                    config.stepTitle === stepTitle
                );
                
                if (stepConfig) {
                    // Se tem configuração, aplica as regras
                    const shouldShow = checkStepConditions(stepConfig, selectedValues);
                    
                    if (shouldShow) {
                        group.style.display = '';
                        group.classList.remove('step-hidden');
                    } else {
                        group.style.display = 'none';
                        group.classList.add('step-hidden');
                        
                        // Limpa todos os inputs do step oculto
                        clearStepInputs(group);
                        
                        // Se o passo oculto estava ativo, move para o próximo visível
                        if (group.classList.contains('active')) {
                            group.classList.remove('active');
                            const nextVisibleStep = findNextVisibleStep(groups.indexOf(group));
                            if (nextVisibleStep) {
                                nextVisibleStep.classList.add('active');
                                const nextStepIdx = allSteps.indexOf(nextVisibleStep);
                                updateActionBtn(nextStepIdx);
                            }
                        }
                    }
                } else {
                    // Se não tem configuração, sempre exibe o passo
                    group.style.display = '';
                    group.classList.remove('step-hidden');
                }
            });
        } finally {
            isApplyingVisibility = false;
        }
    }
    
    function findNextVisibleStep(currentIndex) {
        for (let i = currentIndex + 1; i < allSteps.length; i++) {
            const step = allSteps[i];
            if (step && !step.classList.contains('step-hidden') && step.style.display !== 'none') {
                return step;
            }
        }
        
        // Se não encontrou próximo, volta para o review
        return review;
    }
    
    function findPreviousVisibleStep(currentIndex) {
        for (let i = currentIndex - 1; i >= 0; i--) {
            const step = allSteps[i];
            if (step && !step.classList.contains('step-hidden') && step.style.display !== 'none') {
                return step;
            }
        }
        
        // Se não encontrou anterior, volta para o primeiro passo visível
        return allSteps.find(step => step && !step.classList.contains('step-hidden') && step.style.display !== 'none');
    }

    // Função para atualizar o link do WhatsApp
    function updateWhatsAppLink() {
        const whatsappBtn = document.querySelector('#whatsapp-receita-btn');
        if (whatsappBtn) {
            const whatsappMessage = generateWhatsAppMessage();
            const whatsappBaseUrl = $(`.footer-contact .whatsapp`).closest(`a`).attr(`href`) || 'https://wa.me/5511999999999';
            whatsappBtn.href = `${whatsappBaseUrl}&text=${whatsappMessage}`;
        }
    }

    // Adiciona listeners para atualizar o review e avançar automaticamente
    groups.forEach(group => {
        const inputs = group.querySelectorAll('input');
        inputs.forEach(input => {
            input.removeEventListener('change', updateReview); // Evita múltiplos listeners
            input.addEventListener('change', updateReview);
            
            // Adiciona listener para aplicar regras de visibilidade
            input.addEventListener('change', function() {
                applyStepVisibility();
            });
            
            // Adiciona listener para atualizar o link do WhatsApp
            input.addEventListener('change', function() {
                updateWhatsAppLink();
            });
            
            // Adiciona comportamento de avançar automaticamente para radios
            if (input.type === 'radio') {
                input.addEventListener('change', function() {
                    // Pequeno delay para permitir que a seleção seja processada
                    setTimeout(() => {
                        const currentStepIdx = allSteps.findIndex(step => step.classList.contains('active'));
                        
                        // Remove a classe active do passo atual
                        allSteps.forEach(s => s.classList.remove('active'));
                        
                        // Encontra o próximo passo visível
                        const nextVisibleStep = findNextVisibleStep(currentStepIdx);
                        if (nextVisibleStep) {
                            nextVisibleStep.classList.add('active');
                            
                            // Calcula o índice do próximo passo para updateActionBtn
                            const nextStepIdx = allSteps.indexOf(nextVisibleStep);
                            updateActionBtn(nextStepIdx);
                        }
                    }, 100);
                });
            }
        });
    });

    // Adiciona descrições automáticas aos radio buttons baseado em window.customizationDescriptions
    function addCustomizationDescriptions() {
        if (!window.customizationDescriptions || !Array.isArray(window.customizationDescriptions)) {
            return;
        }
        
        groups.forEach(group => {
            const radioLabels = group.querySelectorAll('label');
            radioLabels.forEach(label => {
                const radio = label.querySelector('input[type="radio"]');
                if (!radio) return;
                
                const labelText = label.textContent.trim();
                
                // Busca descrição correspondente
                const matchingDescription = window.customizationDescriptions.find(desc => 
                    desc.title && labelText.startsWith(desc.title)
                );
                
                if (matchingDescription && matchingDescription.description) {
                    // Verifica se já foi processado
                    if (label.querySelector('div > small')) {
                        return;
                    }
                    
                    // Coleta apenas os nós de texto
                    const textNodes = [];
                    const walker = document.createTreeWalker(
                        label,
                        NodeFilter.SHOW_TEXT,
                        null,
                        false
                    );
                    
                    let node;
                    while (node = walker.nextNode()) {
                        if (node.textContent.trim()) {
                            textNodes.push(node);
                        }
                    }
                    
                    // Cria div para o texto principal
                    const textDiv = document.createElement('div');
                    textDiv.textContent = labelText + ' ';
                    
                    // Adiciona nova descrição dentro da div
                    const descriptionElement = document.createElement('small');
                    descriptionElement.textContent = matchingDescription.description;
                    descriptionElement.style.fontWeight = 'normal';
                    descriptionElement.style.opacity = '0.8';
                    
                    // Adiciona a descrição dentro da div
                    textDiv.appendChild(descriptionElement);
                    
                    // Remove apenas os nós de texto, preservando elementos como .checkmark
                    textNodes.forEach(textNode => {
                        textNode.remove();
                    });
                    
                    // Adiciona a div com o texto e a descrição
                    label.appendChild(textDiv);
                }
            });
        });
    }
    
    // Adiciona as descrições após inicializar
    addCustomizationDescriptions();

    // Aplica regras de visibilidade iniciais
    applyStepVisibility();
    
    // Verifica e limpa campos de steps ocultos após carregar (importante para recarregamento)
    setTimeout(() => {
        groups.forEach(group => {
            if (group.classList.contains('step-hidden') || group.style.display === 'none') {
                clearStepInputs(group);
            }
        });
    }, 100);

    // Atualiza inicialmente
    updateReview();
}



// Função para observar alterações
function observeProductInfoContent() {
	
	const container = document.querySelector('.product-info-content');
	if (!container) return;
	const form = container.querySelector('.product-action');
	if (!form) return;

	const observer = new MutationObserver(function(mutationsList) {
		for (const mutation of mutationsList) {
			// Ignora alterações que envolvam a review
			if ([...mutation.addedNodes].some(node => node.classList && node.classList.contains('personalize-product__review')) ||
				[...mutation.removedNodes].some(node => node.classList && node.classList.contains('personalize-product__review'))
			) {
				continue;
			}
			if (mutation.type === 'childList') {
				personalizeInit();
				break;
			}
		}
	});
	observer.observe(form, { childList: true, subtree: false, attributes: false });
}

function setupProductPage() {
	// $(`.product-color`).insertAfter($(`.product-info-content .product-title`));
	$('.product-title .position-relative').append('<div class="d-flex d-md-none mobile-pricing"></div>');
	$('.product-info-content .product-values').clone().appendTo('.mobile-pricing');
	$(`.product-title .position-relative`).append(`<div class="d-flex d-md-none mobile-colors"></div>`);
	$(`.product-title .h1, .mobile-colors`).wrapAll(`<div class="d-flex flex-column"></div>`)
	$(`.product-info-content .product-color`).clone().appendTo('.mobile-colors');

	const productAction = document.querySelector('.product-info-content .product-action');
	if (productAction) {
		const valuesObserver = new MutationObserver(() => {
			const sourceValues = productAction.querySelector('.product-values');
			const targetValues = document.querySelector('.product-title .product-values');
			if (sourceValues && targetValues) {
				targetValues.innerHTML = sourceValues.innerHTML;
			}
		});
		const productValues = productAction.querySelector('.product-values');
		if (productValues) {
			valuesObserver.observe(productValues, { childList: true, subtree: true, characterData: true });
		}
	}
}

// Sistema de Favoritos usando localStorage
const wishlistManager = {
	// Obtém a chave da wishlist baseada no customer ID atual
	getWishlistKey() {
		if (window.dooca && window.dooca.customer && window.dooca.customer.id) {
			return `wishlist_${window.dooca.customer.id}`;
		}
		return null;
	},

	// Obtém a lista de favoritos do localStorage
	getWishlist() {
		const key = this.getWishlistKey();
		if (!key) return [];
		
		try {
			const wishlist = localStorage.getItem(key);
			return wishlist ? JSON.parse(wishlist) : [];
		} catch (error) {
			console.error('Erro ao ler wishlist:', error);
			return [];
		}
	},

	// Salva a lista de favoritos no localStorage
	saveWishlist(wishlist) {
		const key = this.getWishlistKey();
		if (!key) return false;
		
		try {
			localStorage.setItem(key, JSON.stringify(wishlist));
			return true;
		} catch (error) {
			console.error('Erro ao salvar wishlist:', error);
			return false;
		}
	},

	// Faz toggle de um item na wishlist (adiciona se não existe, remove se existe)
	toggleItem(productId) {
		if (!productId) return false;
		
		const wishlist = this.getWishlist();
		const index = wishlist.indexOf(productId);
		
		if (index > -1) {
			// Remove item da wishlist
			wishlist.splice(index, 1);
		} else {
			// Adiciona item à wishlist
			wishlist.push(productId);
		}
		
		return this.saveWishlist(wishlist);
	},

	// Verifica se um item está na wishlist
	hasItem(productId) {
		if (!productId) return false;
		const wishlist = this.getWishlist();
		return wishlist.includes(productId);
	},

	// Remove um item específico da wishlist
	removeItem(productId) {
		if (!productId) return false;
		
		const wishlist = this.getWishlist();
		const index = wishlist.indexOf(productId);
		
		if (index > -1) {
			wishlist.splice(index, 1);
			return this.saveWishlist(wishlist);
		}
		
		return false;
	},

	// Adiciona um item à wishlist
	addItem(productId) {
		if (!productId) return false;
		
		const wishlist = this.getWishlist();
		
		if (!wishlist.includes(productId)) {
			wishlist.push(productId);
			return this.saveWishlist(wishlist);
		}
		
		return false;
	},

	// Limpa toda a wishlist
	clearWishlist() {
		const key = this.getWishlistKey();
		if (!key) return false;
		
		try {
			localStorage.removeItem(key);
			return true;
		} catch (error) {
			console.error('Erro ao limpar wishlist:', error);
			return false;
		}
	},

	// Obtém o total de itens na wishlist
	getItemCount() {
		return this.getWishlist().length;
	}
};

// Funções para gerenciar botões de wishlist
function createWishlistButton(productId, isProductPage = false) {
	const isInWishlist = wishlistManager.hasItem(parseInt(productId));
	const buttonClass = isProductPage ? 'wishlist-btn-product' : 'wishlist-btn-card';
	const iconClass = isInWishlist ? 'favorited' : '';
	
	if (isProductPage) {
		// Botão com texto para página do produto
		const buttonText = isInWishlist ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
		return $(`
			<button class="wishlist-btn ${buttonClass} ${iconClass}" data-product-id="${productId}">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
						  stroke="currentColor" 
						  stroke-width="2" 
						  fill="${isInWishlist ? 'currentColor' : 'none'}"/>
				</svg>
				<span class="wishlist-btn-text">${buttonText}</span>
			</button>
		`);
	} else {
		// Botão apenas com ícone para product-cards
		return $(`
			<button class="wishlist-btn ${buttonClass} ${iconClass}" data-product-id="${productId}">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
						  stroke="currentColor" 
						  stroke-width="2" 
						  fill="${isInWishlist ? 'currentColor' : 'none'}"/>
				</svg>
			</button>
		`);
	}
}

function setupWishlistButtons() {
	// Adicionar botões nos product-cards
	$('.product-card').each(function() {
		const $card = $(this);
		const productId = $card.attr('data-product-variation-id');
		console.log(productId);
		if (productId && !$card.find('.wishlist-btn-card').length) {
			const $button = createWishlistButton(productId, false);
			
			// Verificar se já está na wishlist e aplicar estado ativo
			if (wishlistManager.hasItem(productId)) {
				
				$button.addClass('favorited');
				$button.find('path').attr('fill', 'currentColor');
			}
			
			$card.prepend($button);
		}
	});
	
	// Adicionar botão na página do produto
	if (window.dooca && window.dooca.product && window.dooca.product.variation.id) {	
		const productId = window.dooca.product.variation.id;
		const $productInfo = $('.product-info-content');
		const $productAction = $productInfo.find('.product-action');
		
		if ($productAction.length && !$productInfo.find('.wishlist-btn-product').length) {
			const $button = createWishlistButton(productId, true);
			
			// Verificar se já está na wishlist e aplicar estado ativo
			if (wishlistManager.hasItem(productId)) {
				$button.addClass('favorited');
				$button.find('path').attr('fill', 'currentColor');
				$button.find('.wishlist-btn-text').text('Remover dos favoritos');
			} else {
				$button.find('.wishlist-btn-text').text('Adicionar aos favoritos');
			}
			
			$button.insertAfter($productAction);
		}
	}
}

function handleWishlistClick(e) {
	e.preventDefault();
	e.stopPropagation();
	
	const $btn = $(e.currentTarget);
	const productId = $btn.data('product-id');
	
	if (!productId) return;
	
	// Verificar se usuário está logado
	if (!window.dooca || !window.dooca.customer || !window.dooca.customer.id) {
		alert('Você precisa estar logado para adicionar itens aos favoritos.');
		return;
	}
	
	// Fazer toggle na wishlist
	const wasInWishlist = wishlistManager.hasItem(productId);
	wishlistManager.toggleItem(productId);
	const isInWishlist = wishlistManager.hasItem(productId);
	
	// Atualizar visual do botão
	if (isInWishlist) {
		$btn.addClass('favorited');
		$btn.find('path').attr('fill', 'currentColor');
	} else {
		$btn.removeClass('favorited');
		$btn.find('path').attr('fill', 'none');
	}
	
	// Atualizar texto do botão se for da página do produto
	const $btnText = $btn.find('.wishlist-btn-text');
	if ($btnText.length) {
		$btnText.text(isInWishlist ? 'Remover dos favoritos' : 'Adicionar aos favoritos');
	}
	
	// Feedback visual opcional
	const action = isInWishlist ? 'adicionado aos' : 'removido dos';
	console.log(`Produto ${action} favoritos`);
}

function setupProductListTags() {
	$(`.product-card`).each(function() {
		const $card = $(this);
		const tags = $card.find(`.product-tags`);
		if (tags.length) {
			$card.find(`.product-title`).before(tags);
		}
	});
};

function asideMenu(){
	$(`.header-middle .navigation-image`).each(function() {
		let altText = $(this).attr('alt') || '';
		console.log(altText)
		$(`.side-navigation a[aria-label="${altText}"]`).prepend($(this).clone());
	});

	
	const row = $('<div class="aside-menu-row row py-4"></div>');
	const colTrack = $(`
		<div class="aside-menu-col col">
			<a href="/account/orders/track" class="aside-menu-link">
				<img src="https://cdn.dooca.store/181370/files/frame-90.svg?v=1758315679" alt="Rastrear pedido" />
				<span>RASTREAR MEU PEDIDO</span>
			</a>
		</div>
	`);
	const colOrders = $(`
		<div class="aside-menu-col col">
			<a href="/account/orders" class="aside-menu-link">
				<img src="https://cdn.dooca.store/181370/files/frame-91.svg?v=1758315675" alt="Minhas compras" />
				<span>MINHAS COMPRAS</span>
			</a>
		</div>
	`);
	row.append(colTrack, colOrders);
	row.insertBefore('.side-navigation');

	$(`.header-mobile-2 .smart-search`).clone().insertBefore(`.side-navigation`);

};
// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
	$(`.footer-navigation > div > .col:not(.row) .h2`).append(`<button class="d-block d-md-none footer-menu-toggle" aria-expanded="false" aria-label="Expandir menu"><img src="https://cdn.dooca.store/181370/files/frame-89.svg?v=1758315118"/></button>`);
	
	$(`body`).on('click', '.footer-menu-toggle', function() {
			const $btn = $(this);
			const $col = $btn.closest('.col-12');
			$btn.toggleClass('expanded');
			$col.toggleClass('expanded');
			

			$col.nextAll().toggle();
	});

	observeProductInfoContent();
	//personalizeInit();
	setupPersonalizeProductTrigger();
	setupProductPage();
	
	
	setupWishlistButtons();

	$(document).on('click', '.wishlist-btn', handleWishlistClick);
	
	const wishlistObserver = new MutationObserver(function(mutations) {
		let shouldSetupButtons = false;
		
		mutations.forEach(function(mutation) {
			mutation.addedNodes.forEach(function(node) {
				if (node.nodeType === 1) { // Element node
					if ($(node).hasClass('product-card') || $(node).find('.product-card').length) {
						shouldSetupButtons = true;
					}
				}
			});
		});
		
		if (shouldSetupButtons) {
			setTimeout(setupWishlistButtons, 100);
		}
	});
	
	wishlistObserver.observe(document.body, {
		childList: true,
		subtree: true
	});
});

window.addEventListener("load", (event) => {
	$('.reviews-slider').trigger('refresh.owl.carousel');
	asideMenu();
	setupProductListTags();
	personalizeInit();
});


document.addEventListener("DOMContentLoaded", () => {
  function setupVoiceRecognition(searchForm, formType = 'desktop') {
    if (!searchForm) return false;

    const searchFormInput = searchForm.querySelector("input");
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.log(`Seu navegador não suporta reconhecimento de voz (${formType})`);
      return false;
    }

    console.log(`✅ Configurando reconhecimento de voz para ${formType}`);

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "pt-BR";

    // Cria o botão do microfone
    const micBtn = document.createElement("button");
    micBtn.type = "button";
    micBtn.id = `voice-btn-${formType}`;
    micBtn.className = "voice-btn";
    micBtn.innerHTML = `<img src="https://cdn.dooca.store/181370/files/microphone-01-1.svg?v=1757473667" alt="Microfone">`;
    searchForm.prepend(micBtn);

    searchFormInput.classList.add('voice-active');

    const micIcon = micBtn.querySelector("img");

    micBtn.addEventListener("click", () => {
      recognition.start();
    });

    recognition.addEventListener("start", () => {
      micIcon.style.opacity = "0.5";
      searchFormInput.focus();
      console.log(`🎤 Voz ativada (${formType}), fale...`);
    });

    recognition.addEventListener("end", () => {
      micIcon.style.opacity = "1"; 
      searchFormInput.focus();
      console.log(`🛑 Reconhecimento de voz finalizado (${formType})`);


      searchFormInput.dispatchEvent(new Event("input"));
    });

    recognition.addEventListener("result", (event) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript.trim().toLowerCase();

      console.log(`📢 Reconhecido (${formType}):`, transcript);

      if (transcript === "stop recording") {
        recognition.stop();
      } else if (transcript === "go") {
        searchForm.submit();
      } else if (transcript === "reset input") {
        searchFormInput.value = "";
      } else {
        searchFormInput.value = transcript;
      }
    });

    return true;
  }

 
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.log("Seu navegador não suporta reconhecimento de voz");
    alert("Seu navegador não suporta reconhecimento de voz");
    return;
  }

  
  const desktopSearchForm = document.querySelector(".header-middle .smart-form");
  if (desktopSearchForm) {
    setupVoiceRecognition(desktopSearchForm, 'desktop');
  } else {
    console.warn("⚠️ Não foi encontrado formulário desktop com a classe .header-middle .smart-form");
  }

  
  const mobileSearchForm = document.querySelector(".header-mobile-2 .smart-form");
  if (mobileSearchForm) {
    setupVoiceRecognition(mobileSearchForm, 'mobile');
  } else {
    console.warn("⚠️ Não foi encontrado formulário mobile com a classe .header-mobile-2 .smart-form");
  }
});

document.addEventListener("DOMContentLoaded", function() {
$(`.header-top .nav-contact`).addClass(`col`).prependTo(`.header .d-xl-block > .text-top > div > .row`);
$(`.nav-top`).addClass(`col`).appendTo(`.header .d-xl-block > .text-top > div > .row`);


let text_top = $('.text-top .p-3').html().split('\n').map(function(item, index){ if(![""," "].includes(item.trim())){return `<div class=header-message__item>${item}</div>`; } }).join(' ');
$(`<div class=header-message><div class=container><div class="header-message__content py-2">${text_top}</div></div></div>`).prependTo('.text-top .p-3');
 
$('.header-message .header-message__content').owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    nav: true,
    items: 1,
});
$(document).ready(function(){
  $(".header-message__content.owl-loaded").trigger("refresh.owl.carousel");
});

$('.section--reviews .col-1 + .col-10,.products-showcase .col-1 + .col-md-10').toggleClass('col-md-10 col-md-slider');
$('.section--reviews .col-1,.products-showcase .col-1').addClass('owl-arrow-custom'); 
    $('.products-showcase .col-1').toggleClass('col-1 col-auto');
let header = $('.header-1');
header.find('nav').closest('.col').toggleClass('col col-auto').insertAfter('.header-middle > .container-fluid > .row > div:first-child');
header.find(`.header-middle > .container-fluid > .row > div:nth-child(4)`).before(`<div class="col-auto xl-visible"><a href="/unidades-otica-popular" class="d-flex align-items-center find_store"><img src="https://cdn.dooca.store/181370/files/frame-80.svg?v=1757473338"><span>Encontre uma loja<br>próxima de você</span></a></div>`)
if(window.dooca.customer?.first_name){
$(`.nav-user > a > span`).html(`<b>Olá! ${window.dooca.customer.first_name}</b><small>Minha conta</small>`);
}else{
$(`.nav-user > a > span`).html(`<b>Olá! Visitante</b><small>Faça login ou cadastre-se</small>`);
};

$(`.footer-bottom >div >.row`).addClass(`col`).appendTo(`.footer-navigation > .row`);

$('.footer-logo-text').remove(); $('<a style="display:block;margin-right:3rem;" href="https://www.alpix.dev/criar-sua-dooca-commerce?ref=oticapopular" target="_blank" > <img style="height:26px" src="https://www.alpix.dev/wp-content/uploads/2022/04/logo_b.svg" / > </a>').insertBefore('.footer-logo-link');
 
$('.reviews-slider').trigger('refresh.owl.carousel');
if (window.innerWidth <= 768) { 
	console.log(`paraaa`)
		$('.section--products-showcase .owl-theme').attr(`id`,``);
		$('.section--products-showcase .owl-theme').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
		$('.section--products-showcase .owl-theme').find('.owl-stage-outer').children().unwrap();
	
}





});