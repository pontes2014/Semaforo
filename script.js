let semaforo = document.getElementById('semaforo')
        let timeout1, timeout2, interval

        function trocarCor(acao) {
            if (acao == 'red') {
                semaforo.src = 'img/vermelho.png'
            } else if (acao == 'yellow') {
                semaforo.src = 'img/amarelo.png'
            } else if (acao == 'green') {
                semaforo.src = 'img/verde.png'
            }
        }

        function automatic() {
            if (interval) { // Verifica se o intervalo já foi criado
                clearInterval(interval) // Se sim, cancela o intervalo
                interval = null
                return
            }

            // Se não, cria um novo intervalo
            let cores = ['red', 'yellow', 'green']
            let index = 0

            interval = setInterval(() => {
                trocarCor(cores[index])
                index = (index + 1) % cores.length
            }, 1000)
        }
