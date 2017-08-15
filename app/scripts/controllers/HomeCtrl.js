(function() {
    function HomeCtrl(Room, $uibModal, Message) {
      this.rooms = Room.all;

      this.openModal = function () {
        $uibModal.open({
          animation: true,
          templateUrl: '/templates/modal.html',
          controller: 'ModalCtrl as modal',
        });
      };
        /**
        * @function activeRoom
        * @desc active room click handler
        */
        this.activeRoom = function(rooms) {
            this.currentRoom = rooms;
            this.allTheMessages = Message.getByRoomId(this.currentRoom.$id);
        };

        /**
        * @function filteredMessages
        * @desc
        */
        this.filteredMessages = function(rooms) {
            this.allTheMessages = Message.getByRoomId(this.activeRoom.$id);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
