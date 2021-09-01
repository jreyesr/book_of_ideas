import Shepherd from 'shepherd.js'

const qBtnPrimaryClasses = "q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--active"
const qBtnStandardClasses = "q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-white text-black q-btn--actionable q-focusable q-hoverable q-btn--active"
const qLinearProgressHtml = (numSteps, currentStep) => `
  <div class="q-linear-progress q-mb-md" role="progressbar" aria-valuemin="1" aria-valuemax="${numSteps}" aria-valuenow="${currentStep}" style="font-size: 10px; border-radius: 5px 5px 0 0;">
    <div class="q-linear-progress__track absolute-full q-linear-progress__track--with-transition q-linear-progress__track--light" style="transform: scale3d(1, 1, 1);"></div>
    <div class="q-linear-progress__model absolute-full q-linear-progress__model--with-transition q-linear-progress__model--determinate" style="transform: scale3d(${currentStep / numSteps}, 1, 1);"></div>
  </div>`

export default function({ goToFirstList, anyLists }) {
  const tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      scrollTo: true,
      modalOverlayOpeningPadding: 10,
      modalOverlayOpeningRadius: 15,
      when: {
        show() {
          const currentStepElement = this.tour.getCurrentStep().el;

          const numSteps = this.tour.steps.length
          const currentStep = this.tour.steps.indexOf(this.tour.getCurrentStep()) + 1
          const rawHtml = qLinearProgressHtml(numSteps, currentStep) // Poor man's HTML template render function :)

          currentStepElement.insertAdjacentHTML("afterbegin", rawHtml)
        },
      },
      popperOptions: {
        modifiers: [{ name: 'offset', options: { offset: [0, 20] } }]
      }
    }
  })

  tour.addStep({
    id: 'welcome-step',
    text: `
      <h5>Welcome to the Book of Ideas!</h5>
      <p>This app allows you to keep lists of interesting things (webpages, videos, libraries/frameworks, books, articles, whatever) that you think may be useful in the future.</p>
      <p>For the same price, it doubles as a shopping/todo/reading list.</p>
    `,
    buttons: [
      { text: 'Cancel', action: tour.cancel, classes: qBtnStandardClasses },
      { text: 'Next', action: tour.next, classes: qBtnPrimaryClasses },
    ],
  })

  tour.addStep({
    id: 'add-list-step',
    text: `
      <h5>Adding lists</h5>
      <p>Add lists of ideas with this button</p>
    `,
    attachTo: {
      element: '[data-shepherd-id="add-new"]',
      on: 'bottom'
    },
    modalOverlayOpeningPadding: 0,
    buttons: [
      { text: 'Cancel', action: tour.cancel, classes: qBtnStandardClasses },
      { text: 'Next', action: tour.next, classes: qBtnPrimaryClasses },
    ],
  })

  if(anyLists) {
    tour.addStep({
      id: 'show-list-step',
      text: `
        <h5>Lists hold whatever you want to save</h5>
        <p>You can add items to lists.</p>
      `,
      attachTo: {
        element: 'div.q-list[data-shepherd-id="idea-list"]',
        on: 'bottom'
      },
      buttons: [
        { text: 'Cancel', action: tour.cancel, classes: qBtnStandardClasses },
        { text: 'Next', action: tour.next, classes: qBtnPrimaryClasses },
      ],
      beforeShowPromise: goToFirstList, // beforeShowPromise waits for the passed Promise to resolve
    })

    tour.addStep({
      id: 'show-actions-step',
      text: `
        <h5>Items</h5>
        <p>You can mark items as important or complete (useful if you have a to-do list, for example)</p>
      `,
      attachTo: {
        element: '[data-shepherd-id="idea-actions"]',
        on: 'bottom'
      },
      buttons: [
        { text: 'Cancel', action: tour.cancel, classes: qBtnStandardClasses },
        { text: 'Next', action: tour.next, classes: qBtnPrimaryClasses },
      ],
    })

    tour.addStep({
      id: 'item-mgmt-step',
      text: `
        <h5>Items</h5>
        <p>Here you can reorder a List's items and delete them</p>
      `,
      attachTo: {
        element: '[data-shepherd-id="item-mgmt"]',
        on: 'bottom'
      },
      buttons: [
        { text: 'Cancel', action: tour.cancel, classes: qBtnStandardClasses },
        { text: 'Done', action: tour.complete, classes: qBtnPrimaryClasses },
      ],
      
      
    })
  }

  return tour
}