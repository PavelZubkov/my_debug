namespace $.$$ {
	
	export class $my_debug extends $.$my_debug {

		@ $mol_mem
		state() {
			return new $mol_state_shared
		}

		counter( next?: number ) {
			return Number(this.state().doc('my_debug3').sub('counter').value( next ) ?? 0)
		}


		@ $mol_mem
		state2() {
			return new $mol_state_shared
		}

		counter2( next?: number ) {
			return Number(this.state2().doc('my_debug3').sub('counter').value( next ) ?? 0)
		}

		value() {
			return this.counter2()
		}

		// @ $mol_action
		override submit() {
			this.counter( this.counter() + 1 );
		}

		auto() {
			console.log(1)
			this.state().sync()
		}

	}

}
