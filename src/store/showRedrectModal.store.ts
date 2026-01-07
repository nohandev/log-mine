import { create } from 'zustand'

type showRedirectModalProps = {
  showRedirectModal: boolean,
  setShowRedirectModal: () => void
}

const useShowRedirectModal = create<showRedirectModalProps>()((set) => ({
  showRedirectModal: false,
  setShowRedirectModal: () => set((state) => ( state.showRedirectModal ? {showRedirectModal : false} : {showRedirectModal: true}))
}))

export default useShowRedirectModal
