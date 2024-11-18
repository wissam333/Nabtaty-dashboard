<template>
  <div class="mb-5 position-relative">
    <VField :name="name" v-slot="{ field, meta }">
      <label
        :for="id"
        :style="`color: #${color}`"
        :class="`form-label fw-bold mb-3   ${
          $i18n.locale == 'ar' ? 'rtl' : ''
        }`"
        v-if="label"
      >
        {{ label }}
        <span v-if="astricts == 'true' ?? false" class="astricts">*</span>
        <span v-if="astricts == 'false' ?? false" class="astricts"></span>
      </label>
      <div class="d-flex align-items-center justify-content-between">
        <input
          v-bind="field"
          :readonly="readonly"
          class="form-control"
          :style="`border:1px solid #${color};color: #${color};height: ${height};padding`"
          :id="id"
          :class="{
            rtl: $i18n.locale != 'en',
            'is-valid': meta.valid && meta.touched,
            'is-invalid': !meta.valid && meta.touched,
          }"
          :placeholder="placeholder"
          :type="type"
          :autocomplete="autocomplete"
        />
        <div v-if="phoneCode" class="country-code">{{ phoneCode }}</div>
      </div>
      <span
        :class="`show-hide-password ${$i18n.locale == 'ar' ? 'rtl' : ''}`"
        v-if="activePasswordEye"
      >
        <i class="fa fa-eye fa-fw" id="show_password" @click="showPassword"></i>
        <i
          class="fa fa-eye-slash d-none fa-fw"
          id="hide_password"
          @click="hidePassword"
        ></i>
      </span>

      <VErrorMessage :name="name" as="div" class="help is-invalid" />
    </VField>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: "text",
    required: true,
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
    default: "",
  },
  autocomplete: {
    type: String,
    default: `true`,
  },
  activePasswordEye: {
    type: Boolean,
    default: false,
  },
  astricts: {
    type: String,
    default: `false`,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  border_color: {
    type: String,
    default: `fff`,
  },
  color: {
    type: String,
    default: `fff`,
  },
  height: {
    type: String,
    default: `54px`,
  },
  phoneCode: {
    type: String,
  },
});
// console.log(value);
const showPassword = (event) => {
  const inputField = event.target
    .closest(".position-relative")
    .querySelector("input");
  const showIcon = event.target
    .closest(".show-hide-password")
    .querySelector("#show_password");
  const hideIcon = event.target
    .closest(".show-hide-password")
    .querySelector("#hide_password");

  inputField.setAttribute("type", "text");
  showIcon.classList.add("d-none");
  hideIcon.classList.remove("d-none");
};

const hidePassword = (event) => {
  const inputField = event.target
    .closest(".position-relative")
    .querySelector("input");
  const showIcon = event.target
    .closest(".show-hide-password")
    .querySelector("#show_password");
  const hideIcon = event.target
    .closest(".show-hide-password")
    .querySelector("#hide_password");

  inputField.setAttribute("type", "password");
  showIcon.classList.remove("d-none");
  hideIcon.classList.add("d-none");
};
</script>

<style lang="scss" scoped>
input {
  &.rtl {
    direction: rtl;
  }
}
.form-floating > label {
  &.rtl {
    right: 0;
    left: unset;
  }
}
.form-check-input:focus {
  box-shadow: none;
}
.form-check > label {
  color: #fff;
}
.form-floating > label {
  color: #000;
}
.form-control {
  height: 54px;
  border: none;

  border-radius: 0px;
  outline: none;
  box-shadow: none;
  background-color: transparent;
}
.help.is-invalid {
  letter-spacing: 0.03rem;
}
.form-control:focus,
.form-control.is-invalid:focus,
.was-validated .form-control:invalid:focus {
  box-shadow: none;
}

.just-bottom-border {
  border-top: 0;
  border-left: 0;
  border-right: 0;
}

.help {
  margin-top: 10px;
  &.is-invalid {
    color: #dc3545;
  }
}
#confirmPassword.form-control.is-valid,
.was-validated #confirmPassword.form-control:valid,
#password.form-control.is-valid,
.was-validated #password.form-control:valid,
#confirmPassword.form-control.is-invalid,
.was-validated #confirmPassword.form-control:invalid,
#password.form-control.is-invalid,
.was-validated #password.form-control:invalid {
  background-image: none;
}
.form-control.rtl.is-valid,
.was-validated .rtl.form-control:valid,
.form-control.rtl.is-invalid,
.was-validated .rtl.form-control:invalid {
  background-position: left calc(0.375em + 0.1875rem) center;
}
.show-hide-password {
  color: $main;
  position: absolute;
  top: 50px;
  right: 20px;
  i:hover {
    color: $main;
    cursor: pointer;
    transition: 0.5s;
  }
  &.rtl {
    right: unset;
    left: 20px;
  }
}

.astricts {
  color: $main;
  font-size: 12px;
}
.country-code {
  width: 20%;
  padding: 0.89rem 0.75rem;
  border: 1px solid $main;
  border-right: none;
  background: $main;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  direction: ltr;
}
</style>
