<template>
  <template
    v-if="
      field.type === undefined ||
      field.type === 'text' ||
      field.type === 'email' ||
      field.type === 'password'
    "
  >
    <input
      class="input-form"
      :name="field.name"
      :id="field.name"
      :type="field.type ?? 'text'"
      :readonly="field.readonly ?? false"
      :placeholder="field.placeholder"
      :value="modelValue"
      v-on:input="$emit('update:modelValue', $event.target.value)"
      :max="field.max ?? ''"
      :min="field.min ?? ''"
      autocomplete="off"
    />
  </template>

  <template v-else-if="field.type === 'number'">
    <input
      class="input-form"
      :type="field.type ?? 'text'"
      :name="field.name"
      :id="field.name"
      :readonly="field.readonly ?? false"
      :placeholder="
        field.placeholder ??
        (!field.readonly && field.label ? `${field.label.toLowerCase()}` : '')
      "
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :max="field.max ?? ''"
      :min="field.min ?? ''"
      autocomplete="off"
      inputmode="numeric"
      onkeypress="return event.charCode >= 48 && event.charCode =< 57"
      onkeydown="return event.keyCode !== 69 && event.keyCode !== 190"
    />
  </template>

  <template v-else-if="field.type === 'textarea'">
    <textarea
      :rows="field.rows ?? 3"
      :placeholder="
        field.placeholder ??
        (!field.readonly && field.label ? `${field.label.toLowerCase()}` : '')
      "
      class="input-form"
      :readonly="field.readonly ?? false"
      :value="modelValue"
      autocomplete="off"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    </textarea>
  </template>

  <template v-else-if="field.type === 'select_single'">
    <div class="relative cursor-pointer">
      <!-- SELECT OPTION -->
      <select
        class="appearance-none input-form !pr-6 relative z-10 !bg-transparent"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="[
          !modelValue ? '!text-gray-500' : '!text-gray-700',
          size === 'sm' ? 'description !pl-2' : 'body-text',
        ]"
      >
        <option v-if="field.placeholder" value="" :selected="!modelValue">
          {{ field.placeholder }}
        </option>
        <option
          v-for="(option, index) in field.options"
          :key="index"
          :value="option.id"
          :selected="option.id.toString() === (modelValue?.toString() || '')"
        >
          {{ showFull ? option.full_name : option.name }}
        </option>
      </select>
      <!-- ICON ARROW -->
      <div class="absolute right-[8px] -translate-y-1/2 top-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M11.8082 3.04845L11.4151 2.65264C11.2914 2.52903 11.1268 2.46093 10.9509 2.46093C10.7751 2.46093 10.6103 2.52903 10.4866 2.65264L6.00268 7.13678L1.51357 2.64767C1.39006 2.52406 1.22528 2.45605 1.04947 2.45605C0.873666 2.45605 0.708786 2.52406 0.585176 2.64767L0.192002 3.04104C-0.0640005 3.29684 -0.0640005 3.71353 0.192002 3.96934L5.53683 9.33338C5.66034 9.45689 5.82493 9.54392 6.00229 9.54392H6.00434C6.18025 9.54392 6.34483 9.45679 6.46835 9.33338L11.8082 3.98387C11.9319 3.86036 11.9998 3.6908 12 3.51499C12 3.33909 11.9319 3.17187 11.8082 3.04845Z"
            fill="#94A3B8"
          />
        </svg>
      </div>
    </div>
  </template>

  <template v-else-if="field.type === 'radio'">
    <template v-for="(item, key) of field.options" :key="key">
      <div class="radio">
        <input
          type="radio"
          :value="item.id !== undefined ? item.id : key"
          :id="`${fieldId}_${key}`"
          :name="fieldId"
          :checked="
            item.id &&
            modelValue &&
            item.id.toString() === modelValue.toString()
          "
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <label :for="`${fieldId}_${key}`">
          {{ item.name ? item.name : item }}
        </label>
        <span></span>
      </div>
    </template>
  </template>
</template>
<script>
export default {
  inheritAttrs: false,
  props: ["field", "modelValue", "size", "showFull"],
  emits: ["update:modelValue", "validate", "input"],
  data() {
    return {
      model: this.modelValue,
      select: this.modelValue,
      fieldId: "",
      option: this.modelValue,
      isChecked: 1,
      isRequired: false,
    };
  },
  created() {
    this.fieldId = Math.random().toString(36).substr(2, 9);

    if (
      this.field.rules[`${this.field.fieldName}`] &&
      this.field.rules[`${this.field.fieldName}`].includes("required")
    ) {
      this.isRequired = true;
    }
  },
  watch: {
    select: {
      handler() {
        this.$emit("input", this.select);
      },
    },

    option: {
      handler() {
        this.$emit("input", this.option);
      },
    },

    modelValue(value) {
      this.select = value;
      this.model = value;
    },
  },
};
</script>
<style lang="scss" scoped>
.input-form {
  @apply px-3 py-2 block w-full bg-white border rounded focus:duration-200 focus:ring-0 outline-none focus:outline-none border-gray-300;
}
input::placeholder,
textarea::placeholder {
  @apply text-gray-500;
}

.input-form:focus::placeholder {
  @apply duration-500;
}
textarea:focus::placeholder {
  @apply duration-200;
}
input[type="text"]:disabled {
  background: #cbd5e1;
}
input[type="number"]:disabled {
  background: #cbd5e1;
}
input[type="password"]:disabled {
  background: #cbd5e1;
}
input[type="email"]:disabled {
  background: #cbd5e1;
}

select {
  // -webkit-appearance: none;
  // -webkit-border-radius: 0px;
  option &:disabled {
    @apply text-gray-500;
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.form-select {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2215%22%20height%3D%227%22%20viewBox%3D%220%200%2015%207%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.49991%206.9995C7.27191%206.9995%207.04491%206.9225%206.85991%206.7675L0.859909%201.7675C0.435909%201.4145%200.377909%200.783495%200.731909%200.359495C1.08491%20-0.0645046%201.71491%20-0.121505%202.13991%200.231495L7.51091%204.7075L12.8729%200.392495C13.3029%200.0464955%2013.9329%200.114495%2014.2789%200.544495C14.6249%200.974495%2014.5569%201.6035%2014.1269%201.9505L8.12691%206.7785C7.94391%206.9255%207.72191%206.9995%207.49991%206.9995Z%22%20fill%3D%22%23989898%22%2F%3E%0A%3C%2Fsvg%3E%0A");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 14px 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
