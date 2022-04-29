CREATE OR REPLACE FUNCTION create_wallet()
  RETURNS TRIGGER
  LANGUAGE PLPGSQL
  AS
$$
BEGIN
	INSERT INTO wallets ("userId")
	VALUES(new.id);
	RETURN NEW;
END
$$;

CREATE TRIGGER create_wallet_by_save_user
  AFTER INSERT
  ON users
  FOR EACH ROW
  EXECUTE PROCEDURE create_wallet();