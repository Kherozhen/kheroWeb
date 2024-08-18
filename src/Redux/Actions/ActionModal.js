export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (project) => ({
    type: OPEN_MODAL,
    payload: project,
});

export const closeModal = () => ({
    type: CLOSE_MODAL
})