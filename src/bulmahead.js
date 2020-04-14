import debounce from 'lodash/debounce'

const bulmahead = (id, idMenu, api, onSelect, delay, minLen = 2) => {
  let input = document.getElementById(id)
  let menuEl = document.getElementById(idMenu)
  let contentEl = document.createElement('div')
  contentEl.classList.add('dropdown-content')
  menuEl.appendChild(contentEl)
  let selected = null

  const setValue = (label, value) => {
    input.value = label
    menuEl.style.display = 'none'
    if (onSelect) {
      onSelect({ label, value })
    }
    return false
  }

  const handleApi = e => {
    const value = e.target.value
    menuEl.style.display = 'none'
    contentEl.innerHTML = ''
    selected = null
    if (value.length <= minLen) {
      return
    }
    api(value).then(suggestions => {
      const suggestionsEl = suggestions.map(({ label, value }) => {
        const a = document.createElement('a')
        a.href = '#'
        a.classList.add('dropdown-item')
        a.innerHTML = label
        a.dataset.value = value
        a.addEventListener('click', function (e) {
          setValue(label, value)
        })
        return a
      })
      if (suggestions.length > 0) {
        suggestionsEl.map(suggEl => {
          contentEl.appendChild(suggEl)
        })
        if (suggestions.length === 1 && suggestions[0].label === value) {
          selected = suggestionsEl[0]
        } else {
          menuEl.style.display = 'block'
        }
      }
    })
  }
  input.addEventListener('input', debounce(handleApi, delay))
  input.addEventListener('focusout', e => {
    if (e.relatedTarget === null || !e.relatedTarget.classList.contains('dropdown-item')) {
      menuEl.style.display = 'none'
    }
  })
  input.addEventListener('focusin', handleApi)
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      e.preventDefault()
      input.value = ''
      handleApi(e)
      return
    }
    if (selected !== null && e.key === 'Enter') {
      setValue(selected.text, selected.dataset.value)
      return
    }

    if (contentEl.children.length === 0) {
      return
    }
    if (selected !== null) {
      selected.classList.remove('is-active')
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()

      if (selected === null) {
        selected = contentEl.firstChild
      } else if (selected.nextSibling !== null) {
        selected = selected.nextSibling
      }
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()

      if (selected === null) {
        selected = contentEl.lastChild
      } else if (selected.previousSibling !== null) {
        selected = selected.previousSibling
      } else {
        selected = null
      }
    }
    if (selected !== null) {
      selected.classList.add('is-active')
    }
  })
}

export default bulmahead
window.bulmahead = bulmahead
