document.addEventListener('DOMContentLoaded', () => {
    const regexInput = document.getElementById('regex')
    const testString = document.getElementById('test-string')
    const flagG = document.getElementById('flag-g')
    const flagI = document.getElementById('flag-i')
    const flagM = document.getElementById('flag-m')
    const results = document.getElementById('results')
    const matchCount = document.getElementById('match-count')
    const matchDetails = document.getElementById('match-details')

    function updateResults() {
        try {
            const pattern = regexInput.value
            const text = testString.value
            
            if (!pattern || !text) {
                results.textContent = text || ''
                matchCount.textContent = 'Matches: 0'
                matchDetails.textContent = ''
                return
            }

            // Build flags string
            let flags = ''
            if (flagG.checked) flags += 'g'
            if (flagI.checked) flags += 'i'
            if (flagM.checked) flags += 'm'

            const regex = new RegExp(pattern, flags)
            const matches = []
            let match
            let highlightedText = text
            let count = 0

            // Find all matches
            if (flags.includes('g')) {
                while ((match = regex.exec(text)) !== null) {
                    matches.push({
                        match: match[0],
                        index: match.index,
                        length: match[0].length
                    })
                    count++
                }
            } else {
                match = regex.exec(text)
                if (match) {
                    matches.push({
                        match: match[0],
                        index: match.index,
                        length: match[0].length
                    })
                    count = 1
                }
            }

            // Highlight matches in reverse order to preserve indices
            for (let i = matches.length - 1; i >= 0; i--) {
                const { match: matchText, index } = matches[i]
                highlightedText = 
                    highlightedText.slice(0, index) +
                    `<span class="match">${matchText}</span>` +
                    highlightedText.slice(index + matchText.length)
            }

            results.innerHTML = highlightedText
            matchCount.textContent = `Matches: ${count}`
            
            // Show match details
            matchDetails.innerHTML = matches
                .map((m, i) => `Match ${i + 1}: "${m.match}" at index ${m.index}`)
                .join('<br>')

        } catch (error) {
            results.textContent = text
            matchCount.textContent = 'Invalid regex pattern'
            matchDetails.textContent = error.message
        }
    }

    // Add event listeners
    regexInput.addEventListener('input', updateResults)
    testString.addEventListener('input', updateResults)
    flagG.addEventListener('change', updateResults)
    flagI.addEventListener('change', updateResults)
    flagM.addEventListener('change', updateResults)
})
