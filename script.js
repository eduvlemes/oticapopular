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
		const personalize = document.querySelector('.personalize-product');
		const buyBtn = document.querySelector('.product-info-content .product-action-buy');
			if (personalize && buyBtn) {
				buyBtn.addEventListener('click', function(e) {
					e.preventDefault();
					e.stopPropagation();
					document.body.classList.add('personalize-product__visible');
				});
			}
}
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
		// Atualiza preço
		const priceValue = actionsDiv.querySelector('span:last-child');
		const priceEl = document.querySelector('.product-action-price .product-price-final .total');
		if (priceValue && priceEl) priceValue.textContent = priceEl.textContent.trim();
		// Define texto e comportamento
		if (currentStepIdx < groups.length - 1) {
			actionBtn.textContent = 'AVANÇAR';
			actionBtn.onclick = function () {
				allSteps.forEach(s => s.classList.remove('active'));
				allSteps[currentStepIdx + 1].classList.add('active');
				updateActionBtn(currentStepIdx + 1);
			};
		} else if (currentStepIdx === groups.length - 1) {
			actionBtn.textContent = 'AVANÇAR';
			actionBtn.onclick = function () {
				allSteps.forEach(s => s.classList.remove('active'));
				review.classList.add('active');
				updateActionBtn(groups.length); // resume
			};
		} else {
			actionBtn.textContent = 'ADICIONAR AO CARRINHO';
			actionBtn.onclick = function () {
				// Aqui você pode disparar o submit do form ou outra ação
				const form = document.querySelector('.product-info-content form[name="form_add_cart"]');
				if (form) form.submit();
			};
		}
	}

	// Inicializa: mostra o primeiro grupo e atualiza o botão
	let activeIdx = allSteps.findIndex(s => s.classList.contains('active'));
	if (activeIdx === -1) {
		allSteps.forEach(s => s.classList.remove('active'));
		allSteps[0].classList.add('active');
		activeIdx = 0;
	}
	updateActionBtn(activeIdx);

	// Sempre que um grupo/review for ativado, atualiza o botão de ação
	allSteps.forEach((step, idx) => {
		if (!step) return;
		const observer = new MutationObserver(() => {
			if (step.classList.contains('active')) updateActionBtn(idx);
		});
		observer.observe(step, { attributes: true, attributeFilter: ['class'] });
	});
  
  // Customiza o grupo RECEITA OFTALMICA
  groups.forEach(group => {
    const label = group.querySelector('.personalize-product__label');
    if (label && label.textContent.trim().toLowerCase().includes('receita oftálmica')) {
      group.classList.add('personalize-product__receita');
      const customHtml = `
        <img src="https://cdn.dooca.store/181370/files/frame-86.svg?v=1757717693" alt="Receita"/><div class="personalize-product__label-heading">VOCÊ TEM UMA RECEITA?</div>
        <p>Tire uma foto da sua receita ou envie um arquivo do seu computador/celular.</p>
        <label class="enviar-receita-btn">
          <input type="file" accept="image/*,.pdf" style="display:none" id="input-receita-oftalmica">
          <span>
            <i class="icon-arquivo"><img src="https://cdn.dooca.store/181370/files/frame-88.svg?v=1757717828"/></i>
            ENVIAR MINHA RECEITA
          </span>
        </label>
        <div class="receita-ou">
          <strong>Não tem uma receita válida?</strong>
          <p>Aperte aqui e agende um exame de vista em um de nossos laboratórios</p>
          <a href="#" class="agendar-exame-link">AGENDAR EXAME DE VISTA</a>
        </div>
      `;
      // Adiciona o HTML customizado após o label original
      label.insertAdjacentHTML('afterend', customHtml);
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
      allSteps.forEach(s => s.classList.remove('active'));
      // Se for o review, volta para o último grupo
      if (step === review) {
        groups[groups.length - 1].classList.add('active');
      } else {
        allSteps[idx - 1].classList.add('active');
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
				value = checked ? checked.parentElement.textContent.trim() : '';
			} else {
				// Textos
				const input = group.querySelector('input[type="text"], input:not([type])');
				value = input ? input.value : '';
			}
			html += `<li><strong>${label}:</strong> ${value || '<em>Não selecionado</em>'}</li>`;

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
								groups[groups.length - 1].classList.add('active');
								if (typeof updateActionBtn === 'function') {
									updateActionBtn(groups.length - 1);
								}
						};
				}
	}

	// Adiciona listeners para atualizar o review
	
	groups.forEach(group => {
		const inputs = group.querySelectorAll('input');
		inputs.forEach(input => {
			input.removeEventListener('change', updateReview); // Evita múltiplos listeners
			input.addEventListener('change', updateReview);
		});
	});

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

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
	observeProductInfoContent();
	personalizeInit();
	setupPersonalizeProductTrigger();
});
