# Antd Form

## 受控表单

```jsx
<Form.Item shouldUpdate={(prevValues, currentValues) => prevValues.poster !== currentValues.poster}>
    {() => {
        const { poster } = editForm.getFieldsValue();
        return (
            <Form.Item label="海报" name="poster" rules={[{ required: true }]}>
                <CUSTOMER /></CUSTOMER>
            </Form.Item>
        );
    }}
</Form.Item>
```
