namespace $.$$ {

	export class $my_debug extends $.$my_debug {

		click() {
			this.log()
		}

		@ $mol_mem
		log() {
			$mol_wire_solid()
			console.log(this.value())
		}

	}

}
