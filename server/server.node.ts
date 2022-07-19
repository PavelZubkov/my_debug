namespace $ {

	export class $my_debug_server extends $mol_object2 {

		@ $mol_mem
		static bootstrap() {
			console.log(1)
			if ( $mol_state_arg.value('--my_debug_server') === null ) process.exit(0)

			console.log(2)
			const obj = new this
			obj.run()
			return obj
		}

		@ $mol_mem
		model() {
			return new $my_debug_model
		}

		@ $mol_mem
		run() {
			console.log(3)
			const counter = this.model().counter()
			const name = this.model().name()
			console.log({ name, counter })
		}

	}

	setTimeout( ()=> {
		console.log(0)
		$my_debug_server.bootstrap()
	} )

}
