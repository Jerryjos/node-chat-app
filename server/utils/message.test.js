var expect=require('expect');
var {generateMessage}=require('./message');
describe('generateMessage',()=>{
  it('should generate corect message object',()=>{
        var from='jen';
        var text='hello';
        var message=generateMessage(from,text);
        expect(message.completed).toBeA('number');
        expect(message).toInclude({from,text});
  });

});
