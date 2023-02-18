namespace $.$$ {

	export class $my_debug_timer extends $mol_object {

		@ $mol_mem
		timer_size(ms?: number) {
			return ms ?? 0
		}

		@ $mol_mem
		passed(ms?: number) {
			return ms ?? 0
		}

		@ $mol_mem
		prev_time(ms?: number) {
			return ms ?? Date.now()
		}

		@ $mol_mem
		refresh_rate(ms?: number) {
			return ms ?? 100
		}

		@ $mol_mem
		remains() {
			if (!this.timer_size() || this.passed() >= this.timer_size()) return 0

			if (!this.paused()) {
				const now = $mol_state_time.now(this.refresh_rate())
				const delta = now - this.prev_time()

				this.passed(this.passed() + delta)
				this.prev_time(now)
			}

			const remains = this.timer_size() - this.passed()
			return Math.max(0, remains)
		}

		@ $mol_mem
		paused(next?: boolean) {
			return next ?? false
		}

		@ $mol_action
		start(ms: number) {
			this.timer_size(ms)
			this.passed(0)
			this.paused(false)
		}

		@ $mol_action
		stop() {
			this.timer_size(0)
			this.passed(0)
		}

	}

	export class $my_debug extends $.$my_debug {

		progress_title() {
			return super.progress_title().replace('{seconds}', (this.Timer().remains() / 1000).toFixed(1))
		}

		pomodoro_start() {
			this.Timer().start(this.duration_minutes().pomodoro * 60 * 1000)
		}

		break_start() {
			this.Timer().start(this.duration_minutes().break * 60 * 1000)
		}

		stop() {
			this.Timer().stop()
		}

		pause() {
			this.Timer().paused(true)
		}

		continue() {
			this.Timer().paused(false)
		}

		refresh_rate(seconds?: number) {
			return this.Timer().refresh_rate(seconds && seconds * 1000) / 1000
		}

	}

}
